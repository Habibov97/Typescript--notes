import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world' });
});

app.listen(3001, () => {
  console.log('application is running!');
});
