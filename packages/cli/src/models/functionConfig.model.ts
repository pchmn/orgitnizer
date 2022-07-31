export interface FunctionConfig {
  $id: string;
  name: string;
  runtime: string;
  path: string;
  entrypoint: string;
  ignore: string[];
  execute: string[];
  events: string[];
  schedule: string;
  timeout: number;
}

export interface AppwriteConfig {
  functions: FunctionConfig[];
}
