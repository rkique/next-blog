#!/usr/bin/env node
// Parses old daily.html from git HEAD and appends entries to posts-data.json
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const html = execSync('git show HEAD:public/daily.html', { cwd: path.join(__dirname, '..') }).toString();
const outputPath = path.join(__dirname, '../public/posts-data.json');
const existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
const existingIds = new Set(existing.map(p => p.id));

// Extract each <p>...</p> block
const blocks = [];
const pRegex = /<p>([\s\S]*?)<\/p>/gi;
let match;
while ((match = pRegex.exec(html)) !== null) {
  blocks.push(match[1].trim());
}

// Parse date from start of block: (M.D.YYYY) or (M.DD.YYYY) etc.
const dateRegex = /^\((\d{1,2})\.(\d{1,2})\.(\d{4})\)/;

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

const imported = [];
for (const block of blocks) {
  const dm = block.match(dateRegex);
  if (!dm) continue;

  const month = dm[1], day = dm[2], year = dm[3];
  const date = `${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`;
  const displayDate = `${month}.${day}.${year}`;
  const id = `daily-${date}-${imported.length}`;

  if (existingIds.has(id)) continue;

  const contentHtml = block;
  const text = stripHtml(block.replace(dateRegex, '').trim());
  const preview = text.split(/\s+/).slice(0, 10).join(' ');

  imported.push({ id, date, displayDate, contentHtml, preview });
}

console.log(`Parsed ${imported.length} entries from daily.html`);

const combined = existing.concat(imported);
combined.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(outputPath, JSON.stringify(combined, null, 2));
console.log(`Written ${combined.length} total posts to posts-data.json`);
