import { cpus } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const FILENAME = 'worker.js';

  const filePath = join(dirname(fileURLToPath(import.meta.url)), FILENAME);

  const coresNumber = cpus().length;

  const workers = [];
  let counter = 10;

  for (let i = 0; i < coresNumber; i++) {
    const worker = new Worker(filePath);
    worker.postMessage(counter++);
    workers.push(worker);
  }

  const results = await Promise.allSettled(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
          worker.on('message', (value) => {
            resolve({ status: 'resolved', data: value });
          });
          worker.on('error', (value) => {
            resolve({ status: 'error', data: null });
          });
        })
    )
  );

  results.forEach((result) => console.log(result.value));
};

await performCalculations();
