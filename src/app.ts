import 'reflect-metadata';
import config from './config/index';
import './database/index';
import express, { Express, Request, Response } from 'express';
import router from './routes';
const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world' });
});

app.use('/api', router);

app.listen(config.port, () => {
  console.log('application is running!');
});
