// import { Column, Entity, ManyToMany, ManyToOne, ObjectIdColumn } from 'typeorm';
// import Client from '../../../domain/client';
// import ClientEntity from './client.entity';

// @Entity('transaction')
// export default class TransactionEntity {
//   @ObjectIdColumn()
//     _id!: string;

//   @Column({ nullable: false })
//     type!: string;

//   @Column({ nullable: false })
//     fund!: string;

//   @Column({ nullable: false, default: new Date().toUTCString() })
//     date!: string;

//   @Column({ nullable: false })
//   @ManyToOne(() => ClientEntity)
//     client!: Client;
// }

import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  type: String,
  fund: String,
  date: String,
  client: Object,
});

export const TransactionEntity = mongoose.model(
  'Transaction',
  transactionSchema
);
