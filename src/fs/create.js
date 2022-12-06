import { appendFile, mkdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  const FOLDER_NAME = 'files';
  const FILE_NAME = 'fresh.txt';

  const folderPath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME
  );

  await mkdir(folderPath, { recursive: true });

  try {
    const fileData = 'I am fresh and young';
    await appendFile(path.join(folderPath, FILE_NAME), fileData, {
      flag: 'ax',
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
