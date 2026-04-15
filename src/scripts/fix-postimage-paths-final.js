import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../../src/content/posts');
const IMG_DIR = path.join(__dirname, '../../src/assets/post_images');

// No totalChanges needed

function normalizeImagePath(imgPath) {
  if (!imgPath) return imgPath;
  let filename = imgPath.replace(/^.*post_images\//, '');
  const ext = path.extname(filename);
  const base = filename.slice(0, -ext.length);
  let newName = filename;
  if (
    !base.toUpperCase().endsWith('RIGHT') &&
    !base.toUpperCase().endsWith('LEFT') &&
    !base.toUpperCase().endsWith('FULL')
  ) {
    newName = `${base}_FULL${ext}`;
    // Try to rename the image file if it exists
    const oldPath = path.join(IMG_DIR, filename);
    const newPath = path.join(IMG_DIR, newName);
    if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`path-renames: ${filename} - updated`);
    }
  }
  return `../../assets/post_images/${newName}`;
}

function fixImagePathsInFile(filePath) {
  let raw = fs.readFileSync(filePath, 'utf8');
  let changed = 0;
  // --- Fix markdown body image links ---
  let content = raw.replace(
    /([\(\"'])(\/src\/assets\/post_images\/|\.\.\/\.\.\/assets\/post_images\/)([^)"'\s]+)([)"'])/g,
    (match, p1, _prefix, filename, p4) => {
      const newPath = normalizeImagePath(filename);
      if (newPath !== `${_prefix}${filename}`) changed++;
      return `${p1}${newPath}${p4}`;
    },
  );
  // --- Fix frontmatter ---
  const parsed = matter(content);
  let fmChanged = false;
  if (
    parsed.data &&
    parsed.data.postImage &&
    typeof parsed.data.postImage === 'object' &&
    parsed.data.postImage.src
  ) {
    const oldSrc = parsed.data.postImage.src;
    const newSrc = normalizeImagePath(oldSrc);
    if (oldSrc !== newSrc) {
      parsed.data.postImage.src = newSrc;
      fmChanged = true;
      changed++;
    }
  }
  if (fmChanged) {
    content = matter.stringify(parsed.content, parsed.data);
  }
  if (changed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (
      entry.isFile() &&
      (fullPath.endsWith('.md') || fullPath.endsWith('.mdx'))
    ) {
      fixImagePathsInFile(fullPath);
    }
  });
}

console.log('Generating path-renames...');
walkDir(POSTS_DIR);
