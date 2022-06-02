import 'dotenv/config';
import fs from 'fs-extra';
import { Client, Functions } from 'node-appwrite';
import { FunctionConfig } from '../models/functionConfig.model';

let functions: Functions;
let functionToDeploy: FunctionConfig;

export async function run() {
  try {
    const functionName = process.argv[2];
    functions = initSdk();
    functionToDeploy = getFunctionToDeploy(functionName);

    await createFunctionIfNotExists();
    await deployFunction();

    console.log('\x1b[32m', `\u2705 function ${functionName} deployed`);
  } catch (err: any) {
    console.error('\x1b[31m', `\u26A0 ${err?.message}`);
  }
}

function initSdk() {
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT || '')
    .setProject(process.env.APPWRITE_PROJECT_ID || '')
    .setKey(process.env.APPWRITE_API_KEY || '');
  return new Functions(client);
}

function getFunctionToDeploy(functionName: string) {
  const appwriteJson = JSON.parse(fs.readFileSync(`${__dirname}/../../../appwrite.json`, 'utf8'));
  const functionToDeploy: FunctionConfig = appwriteJson.functions.find(
    (item: FunctionConfig) => item.name === functionName
  );
  if (!functionToDeploy) {
    throw new Error(`function ${functionName} not found`);
  }
  if (!fs.existsSync(`${__dirname}/../../../${functionToDeploy.path}/${functionToDeploy.entrypoint}`)) {
    throw new Error(`function ${functionName} entrypoint not found`);
  }
  return functionToDeploy;
}

async function createFunctionIfNotExists() {
  try {
    await functions.get(functionToDeploy.name);
  } catch (err: any) {
    if (err.code === 404) {
      await functions.create(
        functionToDeploy.$id,
        functionToDeploy.name,
        functionToDeploy.execute,
        functionToDeploy.runtime,
        {
          APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT
        }
      );
    } else {
      throw err;
    }
  }
}

async function deployFunction() {
  await functions.createDeployment(
    functionToDeploy.$id,
    `dist/${functionToDeploy.entrypoint}`,
    `${__dirname}/../../../${functionToDeploy.path}/${functionToDeploy.name}.tar.gz`,
    true
  );
}

run();
