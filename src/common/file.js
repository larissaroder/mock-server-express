import { createReadStream } from 'fs';

const getFile = (filename) => (request, response) => {
  response.writeHead(200, 'OK');
  createReadStream(filename).pipe(response);
};

export { getFile };
