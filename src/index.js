import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import jwtParser from 'koa-jwt';
import bodyParser from 'koa-bodyparser';
import api from './api';

let { SIGNATURE } = process.env;

let app = new Koa();

app.use(jwtParser({ secret: SIGNATURE, passthrough: true }));
app.use(bodyParser());
app.use(api.routes());
app.use(api.allowedMethods());

app.listen(3000, () => console.log('Server started.'));