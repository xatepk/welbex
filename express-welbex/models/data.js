import { Schema, model } from 'mongoose';

const dataSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

export default model('data', dataSchema);