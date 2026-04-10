#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const notesDir = path.join(__dirname, '../posts/notes');
const outputPath = path.join(__dirname, '../public/notes-data.json');

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getPreview(content, wordCount = 10) {
  const text = stripHtml(content);
  if (!text) return '';
  const words = text.split(/\s+/).filter(Boolean);
  return words.slice(0, wordCount).join(' ');
}

function toDisplayDate(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${parseInt(month)}.${parseInt(day)}.${year}`;
}

const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('.md'));

const notes = [];

for (const filename of files) {
  const content = fs.readFileSync(path.join(notesDir, filename), 'utf8');
  const { data, content: body } = matter(content);

  if (!data.date) continue;

  const contentHtml = body.trim();
  const preview = getPreview(contentHtml);

  notes.push({
    id: filename.replace('.md', ''),
    date: data.date,
    displayDate: toDisplayDate(data.date),
    title: data.title || '',
    subject: data.subject || '',
    contentHtml,
    preview,
  });
}

notes.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(outputPath, JSON.stringify(notes, null, 2));
console.log(`Written ${notes.length} notes to notes-data.json`);
