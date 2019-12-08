import { createReadStream } from 'fs';

const getFile = (filename) => {
  return (request, response) => {
    response.writeHead(200, 'OK');
    createReadStream(filename).pipe(response);
  };
}

export { getFile }