import { env } from 'node:process';

const parseEnv = () => {
  const vars = Object.entries(env)
    .filter((entry) => entry[0].startsWith('RSS_'))
    .reduce((acc, entry) => acc + `; ${entry[0]}=${entry[1]}`, '')
    .slice(1);

  console.log(vars);
};

parseEnv();
