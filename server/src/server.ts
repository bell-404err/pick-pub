import express, {Express, Request, Response, NextFunction} from 'express';
import { config } from 'dotenv';

config();

const app: Express = express();
const PORT  = process.env.PORT || 3000;

console.log('Current working directory:', process.cwd());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

export default server;
