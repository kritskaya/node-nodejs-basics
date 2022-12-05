import { constants } from 'node:fs';
import { access, readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const FOLDER_NAME = 'files';

  const folderPath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME
  );

  try {
    await access(folderPath, constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }

  const files = await readdir(folderPath);

  for (const file of files) {
    console.log(file);
  }
};

await list();
