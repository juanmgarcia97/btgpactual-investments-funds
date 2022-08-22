import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  balance: Number,
  investments: Array,
});

export const ClientEntity = mongoose.model('Client', clientSchema);
