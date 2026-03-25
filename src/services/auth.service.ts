import { DeepPartial } from 'typeorm';
import dataSource from '../database';
import { User } from '../database/entities/User.entity';
import { SignUpParams } from '../types/auth.D';

const signIn = () => {};

const signUp = async (params: SignUpParams) => {
  const userRepo = dataSource.getRepository(User);

  const user = userRepo.create({
    username: params.username,
    password: params.password,
  });

  await userRepo.save(user);
  return user;
};

const authService = {
  signIn,
  signUp,
};

export default authService;
