import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import api from './api';

let app = new Koa();

app.use(bodyParser());
app.use(api.routes());

app.listen(3000, () => console.log('Server started.'));