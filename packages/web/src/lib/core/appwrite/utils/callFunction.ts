import { appwrite } from '../initSdk';
import { FunctionError } from '../models/functionError.model';

export async function callFunction<T>(name: string, data?: string): Promise<T | null> {
  const res = await appwrite.functions.createExecution(name, data, false);
  if (res.status === 'failed') {
    throw new FunctionError(res.functionId, res.statusCode, res.stderr);
  }
  return res.response ? (JSON.parse(res.response) as T) : null;
}
