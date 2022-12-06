import { constants } from 'node:fs';
import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const SRC_FOLDER = 'files';
  const DEST_FOLDER = 'files_copy';

  const srcFolderPath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    SRC_FOLDER
  );

  const destFolderPath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    DEST_FOLDER
  );

  try {
    await mkdir(destFolderPath, { recursive: false });
    await access(srcFolderPath, constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }

  const srcFiles = await readdir(srcFolderPath);

  for (const file of srcFiles) {
    await copyFile(
      path.join(srcFolderPath, file),
      path.join(destFolderPath, file)
    );
  }
};

await copy();
