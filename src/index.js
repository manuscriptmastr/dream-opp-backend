import dotenv from 'dotenv';
dotenv.config();

let { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import api from './api';

let app = new Koa();

app.use(bodyParser());
app.use(api.routes());
app.use(api.allowedMethods());

app.listen(3000, () => console.log('Server started.'));