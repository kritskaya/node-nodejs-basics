import { cpus } from 'node:os';

const performCalculations = async () => {
  const FILENAME = 'worker.js';

  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    FILENAME
  );

  const coresNumber = cpus().length;

  const workers = [];
  const counter = 10;

  for(let i = 0; i < coresNumber; i++) {
    const worker = new Worker(filePath);
    worker.postMessage(counter++);
    workers.push(worker);
  }

  const results = await Promise.allSettled(workers.map((worker) => {
    new Promise(() => {
      worker.on('message', (value) => {

      });
    })
  }))
};

await performCalculations();
