import jwt from 'jsonwebtoken';
import config from '../config';

const jwtsecret: string = config.jwtSecret || 'secret';

const encodedPayload = (payload: any) => {
  const token = jwt.sign(payload, jwtsecret, { expiresIn: '1d' });
};

const decodedPayload = (token: string) => {
  const decoded = jwt.verify(token, jwtsecret);
  if (!decoded) {
    return null;
  }
  return decoded;
};

export default {
  encodedPayload,
  decodedPayload,
};
