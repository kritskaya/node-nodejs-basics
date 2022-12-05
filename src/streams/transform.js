import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream';

const transform = async () => {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const content = chunk.toString();

      let transformedContent = '';
      if (content.endsWith('\n')) {
        transformedContent = content
          .slice(0, content.length - 1)
          .split('')
          .reverse()
          .join('');
      }
      callback(null, `${transformedContent}\n`);
    },
  });

  stdout.write('Input your data\n');
  stdout.write('Press Ctrl+C for exit\n');
  stdin.pipe(stream).pipe(stdout);
};

await transform();
