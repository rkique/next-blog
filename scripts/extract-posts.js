#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');

// Extract daily-blog section
const startIdx = html.indexOf('<div class="daily-blog"');
const endIdx = html.indexOf('<a href="daily.html">');
if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find blog section markers');
  process.exit(1);
}

const blogHtml = html.slice(startIdx, endIdx).replace(/<!--[\s\S]*?-->/g, '');

// Find all <p> tag positions (case insensitive)
const pOpenRegex = /<[pP](?:\s[^>]*)?>(?!<)/g;
const pPositions = [];
let m;
while ((m = pOpenRegex.exec(blogHtml)) !== null) {
  pPositions.push({ start: m.index, end: m.index + m[0].length });
}

// Date pattern: (M.D.YYYY) at start of content
const dateRegex = /^\s*\((\d{1,2})\.(\d{1,2})\.(\d{4})\)/;

let currentDate = null;
let currentDisplayDate = null;
const posts = new Map(); // isoDate -> { displayDate, parts[] }

for (let i = 0; i < pPositions.length; i++) {
  const contentStart = pPositions[i].end;
  const contentEnd = i + 1 < pPositions.length ? pPositions[i + 1].start : blogHtml.length;
  const raw = blogHtml.slice(contentStart, contentEnd);
  // Remove trailing </p>
  const content = raw.replace(/<\/[pP]>\s*$/, '').trim();

  if (!content) continue;

  const dateMatch = content.match(dateRegex);
  if (dateMatch) {
    const month = dateMatch[1].padStart(2, '0');
    const day = dateMatch[2].padStart(2, '0');
    const year = dateMatch[3];
    currentDate = `${year}-${month}-${day}`;
    currentDisplayDate = `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}`;
    if (!posts.has(currentDate)) {
      posts.set(currentDate, { displayDate: currentDisplayDate, parts: [] });
    }
  }

  if (currentDate) {
    posts.get(currentDate).parts.push(content);
  }
}

const postsDir = path.join(__dirname, '../posts');
let written = 0;

for (const [isoDate, { displayDate, parts }] of posts) {
  const filename = `${isoDate}.md`;
  const filepath = path.join(postsDir, filename);
  const combinedContent = parts.join('\n\n');
  const mdContent = `---\ndate: "${isoDate}"\ndisplayDate: "${displayDate}"\n---\n\n${combinedContent}\n`;
  fs.writeFileSync(filepath, mdContent);
  console.log(`Written: ${filename} (${parts.length} part${parts.length !== 1 ? 's' : ''})`);
  written++;
}

console.log(`\nDone. Wrote ${written} files.`);
