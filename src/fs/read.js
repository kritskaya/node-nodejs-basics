import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const FOLDER_NAME = 'files';
  const FILENAME = 'fileToRead.txt';

  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME,
    FILENAME
  );

  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
