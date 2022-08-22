import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  type: String,
  fund: Object,
  date: String,
  amount: Number,
  client: Object,
});

export const TransactionEntity = mongoose.model(
  'Transaction',
  transactionSchema
);
