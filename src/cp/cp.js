import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
  const FILENAME = 'script.js';
  const FOLDER = 'files';

  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FOLDER,
    FILENAME
  );
  spawn('node', [filePath, ...args], { stdio: [0, 1, 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c']);
