import fs from 'node:fs';
import path from 'node:path';

/**
 * Recursively get all markdown files in a directory
 */
function getMarkdownFiles(dir: string, allFiles: string[] = []) {
  if (!fs.existsSync(dir)) return allFiles;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getMarkdownFiles(name, allFiles);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      allFiles.push(name);
    }
  });
  return allFiles;
}

/**
 * Replace image paths in postImage fields and markdown body
 */

function appendFullSuffix(filename: string): {
  newName: string;
  changed: boolean;
} {
  // Only append _FULL if not already suffixed with _RIGHT, _LEFT, or _FULL before extension
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  if (/_((RIGHT)|(LEFT)|(FULL))$/i.test(base)) {
    return { newName: filename, changed: false };
  }
  return { newName: base + '_FULL' + ext, changed: true };
}

function tryRenameImage(oldImagePath: string, newImagePath: string) {
  if (fs.existsSync(oldImagePath) && !fs.existsSync(newImagePath)) {
    fs.renameSync(oldImagePath, newImagePath);
    console.log(`Renamed image: ${oldImagePath} -> ${newImagePath}`);
  }
}

function fixImagePathsInMarkdown(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Helper to fix a single image path
  function fixImagePath(match: string, p1: string, p2: string, p3: string) {
    // p1: prefix, p2: ../../assets/post_images/, p3: filename
    let filename = p3;
    const { newName, changed: suffixed } = appendFullSuffix(filename);
    if (suffixed) {
      // Try to rename the actual file
      const imagesDir = path.resolve('./src/assets/post_images');
      const oldImagePath = path.join(imagesDir, filename);
      const newImagePath = path.join(imagesDir, newName);
      tryRenameImage(oldImagePath, newImagePath);
      filename = newName;
      changed = true;
    }
    return p1 + p2 + filename;
  }

  // Replace postImage: { src: '../../assets/post_images/filename' }
  content = content.replace(
    /(postImage\s*:\s*\{[^}]*src\s*:\s*["'])(\.\.\/\.\.\/assets\/post_images\/)([^"'}]+)/g,
    fixImagePath,
  );

  // Replace postImage: '../../assets/post_images/filename'
  content = content.replace(
    /(postImage\s*:\s*["'])(\.\.\/\.\.\/assets\/post_images\/)([^"']+)/g,
    fixImagePath,
  );

  // Replace images in markdown body ![](...)
  content = content.replace(
    /(!\[[^\]]*\]\()\.\.\/\.\.\/assets\/post_images\/([^\)"']+)/g,
    (match, p1, filename) => {
      const { newName, changed: suffixed } = appendFullSuffix(filename);
      if (suffixed) {
        const imagesDir = path.resolve('./src/assets/post_images');
        const oldImagePath = path.join(imagesDir, filename);
        const newImagePath = path.join(imagesDir, newName);
        tryRenameImage(oldImagePath, newImagePath);
        changed = true;
        return p1 + '../../assets/post_images/' + newName;
      }
      return match;
    },
  );

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated image paths in: ${filePath}`);
  }
}

function main() {
  const postsDir = path.resolve('./src/content/posts');
  const files = getMarkdownFiles(postsDir);
  files.forEach(fixImagePathsInMarkdown);
}

if (
  process.argv[1] ===
  (typeof fileURLToPath === 'function'
    ? fileURLToPath(import.meta.url)
    : import.meta.url)
) {
  main();
}
