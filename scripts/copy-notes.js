#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '../../notes');
const OUTPUT_DIR = path.join(__dirname, '../posts/notes');

// --- Regex-based inclusion rules (filename only, no file content checks) ---

// 1. Anything with "1380" in the filename
const is1380 = (f) => /1380/.test(f);

// 2. Anything with "notes" in the filename (case-insensitive)
const isNotes = (f) => /notes/i.test(f);

// 3. Paper readings: files with (Author, Author) or "Author YYYY" or "Author et al" patterns
const isPaperReading = (f) =>
  // (author, author) parenthetical citation style
  /^\([\w\s,]+\)\s/.test(f) ||
  // "Lastname YYYY" or "Lastname2002" style (capitalized word followed by 4-digit year)
  /[A-Z][a-z]+\s*\d{4}/.test(f) ||
  // "Author et al" style
  /et al/i.test(f);

// 4. All .md files from Freshman Year/ (recursive)
// 5. All .md files from summer 2024/ (recursive)
// These are handled by scanning those directories directly.

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function getDateStr(filePath) {
  try {
    const stat = fs.statSync(filePath);
    const d = stat.mtime;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  } catch {
    return '2024-01-01';
  }
}

function titleFromFilename(f) {
  return f.replace(/\.md$/, '').replace(/\.txt$/, '');
}

function guessSubject(filePath, filename) {
  const f = filename.toLowerCase();
  const rel = filePath.toLowerCase();
  if (/1380|distributed|replicat|mapreduce|pBFT|raft|paxos|broadcast protocol/i.test(filename)) return 'distributed-systems';
  if (/network|tcp|bgp|dns|rip |switching/i.test(filename)) return 'networks';
  if (/evol|origin.*(speech|language)|mufwene|hockett|gibson.*proto|senghas|bybee|woensdregt|miyagawa|henshilwood/i.test(filename)) return 'evolution-of-language';
  if (/nlp|bert|gpt|llm|lre|transformer|word2vec|embeddings|tokeniz|bleu|glue|lora|prompting|fine.?tun|language.?model|surprisal|mechanistic|circuit|superposition|crosscoder|mech.?interp/i.test(filename)) return 'machine-learning';
  if (/phonol|phonetic|phonotactic|sonority/i.test(filename)) return 'phonology';
  if (/diff.?geo|curvature|manifold|geodesic/i.test(filename)) return 'differential-geometry';
  if (/infoling|information.?theory|entropy|info.?ling/i.test(filename)) return 'information-theory';
  if (/compiling|comp.?ling|syntax|semantics|grammati|morpholog|lexsem|pragmatic/i.test(filename)) return 'linguistics';
  if (/word.?game|language.?game|taboo/i.test(filename)) return 'linguistics';
  if (/pl |programming.?lang|interp|stacker|type.?check/i.test(filename)) return 'programming-languages';
  if (/algorithm|leetcode|dfa|bst|max.?flow|fibonacci|malloc|arithmetic/i.test(filename)) return 'algorithms';
  if (/shell|go |goroutine|channel|systems|1730/i.test(filename)) return 'systems';
  if (rel.includes('freshman year/ling')) return 'linguistics';
  if (rel.includes('freshman year/math')) return 'algorithms';
  if (rel.includes('freshman year/ethics')) return 'linguistics';
  if (rel.includes('summer 2024')) return 'machine-learning';
  return 'nlp';
}

// Collect all files to copy: { srcPath, title, relativeName }
const filesToCopy = new Map(); // keyed by srcPath to deduplicate

function addFile(srcPath, title) {
  if (filesToCopy.has(srcPath)) return;
  if (!fs.existsSync(srcPath)) return;
  const stat = fs.statSync(srcPath);
  if (stat.isDirectory()) return;
  // Only .md and .txt text files
  if (!/\.(md|txt)$/.test(srcPath)) return;
  filesToCopy.set(srcPath, title);
}

// --- Scan top-level notes dir for regex matches ---
const topFiles = fs.readdirSync(NOTES_DIR);
for (const f of topFiles) {
  if (!/\.(md|txt)$/.test(f)) continue;
  if (is1380(f) || isNotes(f) || isPaperReading(f)) {
    addFile(path.join(NOTES_DIR, f), titleFromFilename(f));
  }
}

// --- Scan Freshman Year recursively ---
function walkDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else if (/\.(md|txt)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const freshmanDir = path.join(NOTES_DIR, 'Freshman Year');
for (const fp of walkDir(freshmanDir)) {
  const basename = path.basename(fp);
  addFile(fp, titleFromFilename(basename));
}

// --- Scan summer 2024 recursively ---
const summerDir = path.join(NOTES_DIR, 'summer 2024');
for (const fp of walkDir(summerDir)) {
  const basename = path.basename(fp);
  addFile(fp, titleFromFilename(basename));
}

// --- Write output files ---
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

let count = 0;
const slugsSeen = new Set();

for (const [srcPath, title] of filesToCopy) {
  const date = getDateStr(srcPath);
  const filename = path.basename(srcPath);
  const subject = guessSubject(srcPath, filename);
  let slug = slugify(title);
  // Deduplicate slugs
  if (slugsSeen.has(slug)) {
    let i = 2;
    while (slugsSeen.has(`${slug}-${i}`)) i++;
    slug = `${slug}-${i}`;
  }
  slugsSeen.add(slug);

  const content = fs.readFileSync(srcPath, 'utf8');
  const outName = `${date}-${slug}.md`;
  const frontmatter = [
    '---',
    `date: '${date}'`,
    `title: '${title.replace(/'/g, "''")}'`,
    `subject: '${subject}'`,
    '---',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, outName), frontmatter + content);
  count++;
}

console.log(`Copied ${count} notes to posts/notes/`);
