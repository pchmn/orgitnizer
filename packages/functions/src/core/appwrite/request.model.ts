export interface Request {
  env: Record<string, string>;
  headers: Record<string, string>;
  payload: Record<string, unknown>;
}
