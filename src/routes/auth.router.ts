import express from 'express';
import authController from '../controllers/auth.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import authValidation from '../validations/auth.validation';

const authRouter = express.Router();

authRouter.route('/register').post(validationMiddleware(authValidation.signUp), authController.signUp);

export default authRouter;
