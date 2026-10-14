import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!');
});

app.listen(3000);
