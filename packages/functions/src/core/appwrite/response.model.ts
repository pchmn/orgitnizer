export interface Response {
  send: (text: string, status?: number) => void;
  json: (obj: unknown, status?: number) => void;
}
