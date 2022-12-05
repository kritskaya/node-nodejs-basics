import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';

const write = async () => {
  const FILENAME = 'fileToWrite.txt';
  const FOLDER = 'files';

  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    FILENAME
  );

  const stream = createWriteStream(filePath);
  stdout.write('Input your data\n');
  stdout.write('Press Ctrl+C for exit\n');
  stdin.on('data', (data) => stream.write(data));
};

await write();
