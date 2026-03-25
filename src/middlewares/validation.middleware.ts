import { NextFunction, Request, Response } from 'express';
import z from 'zod';

const validationMiddleware = (schema: z.ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    const { success, error, data } = schema.safeParse(req.body);
    if (!success) {
      // return next(new Error('validation error'));
      return res.status(400).json({ error: error?.issues });
    }

    req.body = data;
    next();
  };
};

export default validationMiddleware;
