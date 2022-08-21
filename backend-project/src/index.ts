import 'reflect-metadata';
import dotenv from 'dotenv';
import { mongoDataSource } from './infrastructure/db.config';
import Server from './server';

dotenv.config();

const start = async () => {
  await mongoDataSource.initialize();
  new Server().start();
};

start();
