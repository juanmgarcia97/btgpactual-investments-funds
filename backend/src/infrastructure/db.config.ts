import mongoose from 'mongoose';
import { DataSource } from 'typeorm';
import TransactionEntity from './persistence/entity/transaction.entity';

export const mongoDataSource = new DataSource({
  type: 'mongodb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  useUnifiedTopology: true,
  entities: [TransactionEntity]
});