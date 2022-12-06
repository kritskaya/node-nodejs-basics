import { createServer } from 'node:http';
import { release, version } from 'node:os';
import path, { dirname } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import './files/c.js';

const random = Math.random();
const require = createRequire(import.meta.url);

let unknownObject;
if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filePath = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${filePath}`);

const dirPath = dirname(filePath);
console.log(`Path to current directory is ${dirPath}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
