import express from 'express';
import router from './mock-api/endpoints';

const app = express();

const server = () => app.use(router).listen(3000);

server();

