#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../posts');
const outputPath = path.join(__dirname, '../public/posts-data.json');

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

function getPreview(htmlContent, wordCount = 10) {
  const text = stripHtml(htmlContent);
  if (!text) return '';
  const words = text.split(/\s+/).filter(Boolean);
  return words.slice(0, wordCount).join(' ');
}

function toDisplayDate(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${parseInt(month)}.${parseInt(day)}.${year}`;
}

const files = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md') && /^\d{4}-\d{2}-\d{2}/.test(f));

const posts = [];

for (const filename of files) {
  const content = fs.readFileSync(path.join(postsDir, filename), 'utf8');
  const { data, content: body } = matter(content);

  if (!data.date) continue;

  const contentHtml = body.trim();
  const preview = getPreview(contentHtml);

  posts.push({
    id: filename.replace('.md', ''),
    date: data.date,
    displayDate: toDisplayDate(data.date),
    contentHtml,
    preview
  });
}

posts.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
console.log(`Written ${posts.length} posts to posts-data.json`);
