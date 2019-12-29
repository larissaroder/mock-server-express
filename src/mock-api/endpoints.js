import express from 'express';
import path from 'path';
import { getFile } from '../common/file';
import { configGet } from '../common/configGet';

const router = express.Router();

try {
  configGet.forEach((config) => router.get(config.path, getFile(path.join(__dirname, config.file))));
} catch (err) {
  throw new Error(err);
}

export default router;
