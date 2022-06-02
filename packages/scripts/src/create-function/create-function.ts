import fs from 'fs-extra';

function createAppwriteFunction(functionName: string) {
  try {
    generateDefaultFiles(functionName);
    updateAppWriteJson(functionName);
  } catch (err) {
    console.error(err);
  }
}

function generateDefaultFiles(functionName: string) {
  const packageJson = JSON.parse(fs.readFileSync(`${__dirname}/defaultFiles/package.json`, 'utf8'));
  packageJson.name = functionName;
  fs.writeFileSync(`${__dirname}/defaultFiles/package.json`, JSON.stringify(packageJson, null, 2));
  fs.copySync(`${__dirname}/defaultFiles`, `${process.cwd()}/../functions/${functionName}`);
}

function updateAppWriteJson(functionName: string) {
  const appwriteJson = JSON.parse(fs.readFileSync(`${process.cwd()}/../../appwrite.json`, 'utf8'));
  appwriteJson.functions.push({
    $id: functionName,
    name: functionName,
    runtime: 'node-16.0',
    path: `packages/functions/${functionName}`,
    entrypoint: 'dist/index.js',
    ignore: ['node_modules', 'src', 'package.json', 'tsconfig.json'],
    execute: [],
    events: [],
    schedule: '',
    timeout: 15
  });
  fs.writeFileSync(`${process.cwd()}/../../appwrite.json`, JSON.stringify(appwriteJson, null, 2));
}

function run() {
  createAppwriteFunction(process.argv[2]);
}

run();
