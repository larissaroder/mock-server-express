import express from 'express';
import router from './mock-api/endpoints';
import '../env/env';

const app = express();

const server = () => app.use(router).listen(global.gConfig.node_port, () => {
  // eslint-disable-next-line no-console
  console.log(`${global.gConfig.config_id} listening on port ${global.gConfig.node_port}`);
});

server();
