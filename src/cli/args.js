import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv
    .reduce((acc, arg, index) => {
      if (index > 1) {
        return index % 2 === 0 ? acc + `, ${arg.slice(2)} is ` : acc + arg;
      } else {
        return acc;
      }
    }, '')
    .slice(2);
  console.log(args);
};

parseArgs();
