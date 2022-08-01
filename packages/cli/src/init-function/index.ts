#!/usr/bin/env node
import fs from 'fs-extra';
import { FunctionConfig } from '../models/functionConfig.model';

export async function runInitFunction(functionName: string) {
  initFunction(functionName);
  console.log('\x1b[32m', `\u2705 function ${functionName} initialized`);
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
  fs.copySync(`${__dirname}/../src/init-function/defaultFiles`, `${__dirname}/../../functions/src/${functionName}`);
  fs.renameSync(
    `${__dirname}/../../functions/src/${functionName}/index.ts`,
    `${__dirname}/../../functions/src/${functionName}/${functionName}.ts`
  );
  const indexContent = fs.readFileSync(`${__dirname}/../../functions/src/${functionName}/${functionName}.ts`, 'utf8');
  fs.writeFileSync(
    `${__dirname}/../../functions/src/${functionName}/${functionName}.ts`,
    indexContent.replace('index', functionName)
  );
}

function updateFunctionsPackageJson(functionName: string) {
  const packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../../functions/package.json`, 'utf8'));
  packageJson.scripts.build += ` && pnpm build-${functionName}`;
  const buildArray = packageJson.scripts.build.split(' && ');
  packageJson.scripts.build = [...new Set(buildArray)].join(' && ');
  packageJson.scripts[
    `build-${functionName}`
  ] = `esbuild src/${functionName}/${functionName}.ts --bundle --minify --platform=node --target=node16.0 --outfile=dist/${functionName}.js && tar -czvf dist/${functionName}.tar.gz --directory=dist ${functionName}.js`;
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
