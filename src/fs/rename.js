import { constants } from 'node:fs';
import { access, rename } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const renameFile = async () => {
  const FOLDER_NAME = 'files';
  const FILENAME = 'wrongFilename.txt';
  const NEW_FILENAME = 'properFilename.md';

  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME,
    FILENAME
  );

  const newFilePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER_NAME,
    NEW_FILENAME
  );

  try {
    await access(filePath, constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }

  let result;
  try {
    result = await access(newFilePath, constants.F_OK);
  } catch {
    rename(filePath, newFilePath);
  } finally {
    if (!result) {
      throw new Error('FS operation failed');
    }
  }
};

await renameFile();
