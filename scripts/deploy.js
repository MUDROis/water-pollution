import ghPages from 'gh-pages';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

// Use a very short path outside the project
const tempBase = 'C:\\wp';
const gitDir = path.join(tempBase, '.git');

console.log('Setting up working directory...');
if (fs.existsSync(tempBase)) {
  fs.rmSync(tempBase, { recursive: true, force: true });
}
fs.mkdirSync(tempBase, { recursive: true });

console.log('Copying build files to working directory...');
const files = fs.readdirSync(distDir);
files.forEach(file => {
  const src = path.join(distDir, file);
  const dest = path.join(tempBase, file);
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const subFiles = fs.readdirSync(src);
    subFiles.forEach(subFile => {
      fs.copyFileSync(path.join(src, subFile), path.join(dest, subFile));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
});

// Initialize git repo in the short path
console.log('Initializing git repository...');
const gitInit = spawnSync('git', ['init'], {
  cwd: tempBase,
  stdio: 'inherit',
  encoding: 'utf-8'
});

if (gitInit.status !== 0) {
  console.error('Git init failed:', gitInit.stderr);
  fs.rmSync(tempBase, { recursive: true, force: true });
  process.exit(1);
}

// Configure git
console.log('Configuring git user...');
spawnSync('git', ['config', 'user.name', 'Deploy Bot'], {
  cwd: tempBase,
  stdio: 'ignore',
  encoding: 'utf-8'
});
spawnSync('git', ['config', 'user.email', 'deploy@example.com'], {
  cwd: tempBase,
  stdio: 'ignore',
  encoding: 'utf-8'
});

// Add remote
console.log('Adding remote...');
spawnSync('git', ['remote', 'add', 'origin', 'https://github.com/MUDROis/water-pollution.git'], {
  cwd: tempBase,
  stdio: 'ignore',
  encoding: 'utf-8'
});

// Add and commit files
console.log('Adding files...');
spawnSync('git', ['add', '.'], {
  cwd: tempBase,
  stdio: 'inherit',
  encoding: 'utf-8'
});

console.log('Committing changes...');
spawnSync('git', ['commit', '-m', 'Deploy update [skip ci]'], {
  cwd: tempBase,
  stdio: 'inherit',
  encoding: 'utf-8'
});

// Force push to gh-pages
console.log('Pushing to gh-pages branch...');
const gitPush = spawnSync('git', ['push', '-f', 'origin', 'HEAD:gh-pages'], {
  cwd: tempBase,
  stdio: 'inherit',
  encoding: 'utf-8'
});

// Cleanup
console.log('Cleaning up working directory...');
fs.rmSync(tempBase, { recursive: true, force: true });

if (gitPush.status !== 0) {
  console.error('Deployment failed');
  process.exit(1);
}

console.log('Deployment successful!');
