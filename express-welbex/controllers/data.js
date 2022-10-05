import Data from '../models/data.js';

const getData = (req, res) => Data.find({})
  .then((Data) => res.status(200).send(Data))
  .catch((err) => res.status(500).send({ message: err.message }));

const postData = (req, res) => {
  Data.create({})
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(404).send({ message: `Введены некорректные данные ${err}` });
      }
      return res.status(500).send({ message: err.message });
    });
};

export default {getData, postData};