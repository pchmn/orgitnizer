export interface Request {
  env: { [key: string]: string };
  headers: { [key: string]: string };
  payload: { [key: string]: unknown };
}
