#!/usr/bin/env node
import { config } from 'dotenv';
import fs from 'fs-extra';
import { Functions } from 'node-appwrite';
import { AppwriteConfig, FunctionConfig } from '../models/functionConfig.model';
import { initSdk } from '../utils/initSdk';

config({ path: `${__dirname}/../.env` });

let functions: Functions;
let appwriteJson: AppwriteConfig;

export async function runDeployFunction(params: string) {
  functions = initSdk();
  appwriteJson = JSON.parse(fs.readFileSync(`${__dirname}/../../../appwrite.json`, 'utf8'));

  await deploy(params);
}

async function deploy(params: string) {
  if (params === 'all') {
    appwriteJson.functions.forEach(async (item: FunctionConfig) => {
      const functionToDeploy = getFunctionToDeploy(item.name);
      await createFunctionIfNotExists(functionToDeploy);
      await deployFunction(functionToDeploy);
      console.log('\x1b[32m', `\u2705 function ${item.name} deployed`);
    });
  } else {
    const functionToDeploy = getFunctionToDeploy(params);
    await createFunctionIfNotExists(functionToDeploy);
    await deployFunction(functionToDeploy);
    console.log('\x1b[32m', `\u2705 function ${params} deployed`);
  }
}

function getFunctionToDeploy(functionName: string) {
  const functionToDeploy = appwriteJson.functions.find((item: FunctionConfig) => item.name === functionName);
  if (!functionToDeploy) {
    throw new Error(`function ${functionName} not found`);
  }
  if (!fs.existsSync(`${__dirname}/../../../${functionToDeploy.path}/${functionToDeploy.name}.tar.gz`)) {
    throw new Error(`function ${functionName} build (.tar.gz) not found`);
  }
  return functionToDeploy;
}

async function createFunctionIfNotExists(functionToDeploy: FunctionConfig) {
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

async function deployFunction(functionToDeploy: FunctionConfig) {
  await functions.createDeployment(
    functionToDeploy.$id,
    functionToDeploy.entrypoint,
    `${__dirname}/../../../${functionToDeploy.path}/${functionToDeploy.name}.tar.gz`,
    true
  );
}
