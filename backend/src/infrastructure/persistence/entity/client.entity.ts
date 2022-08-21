// import { Column, Entity, ObjectID, PrimaryColumn } from 'typeorm';

// @Entity('client')
// export default class ClientEntity {
//   @PrimaryColumn()
//     _id!: ObjectID;

//   @Column({ nullable: false })
//     id!: string;

//   @Column({ nullable: false })
//     name = '';

//   @Column({ nullable: false })
//     balance = 0;

//   @Column({ nullable: false })
//     investments: any[] = [];
// }

import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  balance: Number,
  investments: Array,
});

export const ClientEntity = mongoose.model('Client', clientSchema);
