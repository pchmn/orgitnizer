export class FunctionError extends Error {
  constructor(public functionId: string, public statusCode: number, message: string) {
    super(message);
  }
}
