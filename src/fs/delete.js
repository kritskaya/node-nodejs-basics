import { rm } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const FOLDER_NAME = 'files';
  const FILENAME = 'fileToRemove.txt';

  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME,
    FILENAME
  );

  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
