import { initSdk, Request, Response } from '@core/appwrite';

export default async function index(req: Request, res: Response) {
  try {
    const { account } = initSdk(req.env);

    res.json({ areDevelopersAwesome: true });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
