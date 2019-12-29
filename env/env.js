import _ from 'lodash';
import env from './env.json';

const defaultConfig = env.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = env[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

global.gConfig = finalConfig;
