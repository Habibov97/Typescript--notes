import { Request, Response } from 'express';
import authService from '../services/auth.service';
const signIn = async (req: Request, res: Response) => {
  res.send('signIn');
};

const signUp = async (req: Request, res: Response) => {
  const result = await authService.signUp(req.body);

  res.json(result);
};

const authController = {
  signUp,
  signIn,
};

export default authController;
