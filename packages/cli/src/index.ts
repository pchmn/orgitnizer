import { config } from 'dotenv';
import { runDeployFunction } from './deploy-function';
import { runInitFunction } from './init-function';

config({ path: `${__dirname}/../.env` });

export async function run() {
  try {
    const domain = process.argv[2];
    const method = process.argv[3];
    const params = process.argv[4];

    switch (domain) {
      case 'function':
        await functionCli(method, params);
    }
  } catch (err: any) {
    console.error('\x1b[31m', `\u26A0 ${err}`);
  }
}

async function functionCli(method: string, params: string) {
  if (method === 'deploy') {
    await runDeployFunction(params);
  } else if (method === 'init') {
    await runInitFunction(params);
  }
}

run();
