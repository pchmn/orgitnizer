import fs from 'fs-extra';
import { FunctionConfig } from '../models/functionConfig.model';

const rootDirectory = `${__dirname}/../../..`;

export async function run() {
  try {
    const functionName = process.argv[2];
    initFunction(functionName);
    console.log('\x1b[32m', `\u2705 function ${functionName} initialized`);
  } catch (err: any) {
    console.error('\x1b[31m', `\u26A0 ${err?.message}`);
  }
}

function initFunction(functionName: string) {
  if (!functionName) {
    throw new Error('Function name is mandatory');
  }
  updateAppWriteJson(functionName);
  generateDefaultFiles(functionName);
  updateFunctionsPackageJson(functionName);
}

function generateDefaultFiles(functionName: string) {
  console.log(rootDirectory);
  fs.copySync(`${__dirname}/../src/init-function/defaultFiles`, `${__dirname}/../../functions/src/${functionName}`);
}

function updateFunctionsPackageJson(functionName: string) {
  const packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../../functions/package.json`, 'utf8'));
  packageJson.scripts.build += ` && pnpm build-${functionName}`;
  const buildArray = packageJson.scripts.build.split(' && ');
  packageJson.scripts.build = [...new Set(buildArray)].join(' && ');
  packageJson.scripts[
    `build-${functionName}`
  ] = `esbuild src/${functionName}/index.ts --bundle --minify --platform=node --target=node16.0 --outfile=dist/${functionName}.js && tar -czvf dist/${functionName}.tar.gz dist/${functionName}.js`;
  fs.writeFileSync(`${__dirname}/../../functions/package.json`, JSON.stringify(packageJson, null, 2));
}

function updateAppWriteJson(functionName: string) {
  const appwriteJson = JSON.parse(fs.readFileSync(`${__dirname}/../../../appwrite.json`, 'utf8'));
  if (appwriteJson.functions.find((item: FunctionConfig) => item.name === functionName)) {
    throw new Error(`function ${functionName} already exists`);
  }
  const ignore = appwriteJson.functions.map((item: FunctionConfig) => `${item.name}.js`);
  appwriteJson.functions.forEach((item: FunctionConfig) => {
    item.ignore.push(`${functionName}.js`);
    item.ignore = [...new Set(item.ignore)];
  });
  appwriteJson.functions.push({
    $id: functionName,
    name: functionName,
    runtime: 'node-16.0',
    path: `packages/functions/dist`,
    entrypoint: `${functionName}.js`,
    ignore,
    execute: ['role:member'],
    events: [],
    schedule: '',
    timeout: 15
  });
  fs.writeFileSync(`${__dirname}/../../../appwrite.json`, JSON.stringify(appwriteJson, null, 2));
}

run();
