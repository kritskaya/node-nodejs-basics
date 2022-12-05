import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  const FILENAME = 'fileToCalculateHashFor.txt';
  const FOLDER = 'files';
  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    FILENAME
  );

  const content = await readFile(filePath);

  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();
