import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv
    .reduce((acc, arg, index) => {
      if (index > 1) {
        console.log(acc, arg);
        return index % 2 === 0 ? acc + `, ${arg} is ` : acc + arg;
      } else {
        return acc;
      }
    }, '')
    .slice(2);
  console.log(args);
};

parseArgs();
