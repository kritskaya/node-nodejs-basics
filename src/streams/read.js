import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const FILENAME = 'fileToRead.txt';
  const FOLDER = 'files';

  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    FILENAME
  );

  const stream = createReadStream(filePath);

  let fileContent = '';
  stream.on('data', (chunk) => (fileContent += chunk));
  stream.on('end', () => stdout.write(fileContent));
};

await read();
