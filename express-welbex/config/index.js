import * as dotenv from 'dotenv';

const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/mongo-welbex',
};

export default config;