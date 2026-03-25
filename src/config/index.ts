import dotenv from 'dotenv';
import path from 'path';

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

export default {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET,
};
