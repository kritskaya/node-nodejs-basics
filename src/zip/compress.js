import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const SOURCE_FILENAME = 'fileToCompress.txt';
  const DEST_FILENAME = 'archive.gz';
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

  const zipStream = createGzip();
  readableStream.pipe(zipStream).pipe(writebleStream);
};

await compress();
