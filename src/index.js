import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import Koa from 'koa';
import Router from 'koa-router';
import api from './api';

let app = new Koa();
let router = new Router();

router.use('/api', api.routes());
app.use(router.routes());

app.listen(3000, () => console.log('Server started.'));