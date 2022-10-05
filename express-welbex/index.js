import express from 'express';
import router from './routes/data.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/index.js';

const { PORT, MONGO_URL } = config;


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }, err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
  });

app.use('/', router);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}}`)
})