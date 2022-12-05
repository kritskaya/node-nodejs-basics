import { constants } from 'node:fs';
import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
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

  fs.access(newFilePath, constants.F_OK, (error) => {
    if (error) {
      fs.rename(filePath, newFilePath, (error) => {
        if (error) {
          throw new Error('FS operation failed');
        }
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await rename();
