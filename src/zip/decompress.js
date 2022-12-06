import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const SOURCE_FILENAME = 'archive.gz';
  const DEST_FILENAME = 'fileToCompress.txt';
  const FOLDER = 'files';

  const sourceFilePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    SOURCE_FILENAME
  );

  const destFilePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    DEST_FILENAME
  );

  const readableStream = createReadStream(sourceFilePath);
  const writebleStream = createWriteStream(destFilePath);

  const zipStream = createUnzip();
  readableStream.pipe(zipStream).pipe(writebleStream);
};

await decompress();
