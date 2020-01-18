import express from 'express';
import router from './mock-api/endpoints';
import '../env/env';

const app = express();

const server = () => app.use(router).listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${global.gConfig.config_id} listening on port ${process.env.PORT}`);
});

server();
