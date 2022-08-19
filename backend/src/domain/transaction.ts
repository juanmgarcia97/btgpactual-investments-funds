import Client from './client';
import { TransactionType } from './types';

export default class Transaction {
  constructor(
    private id: string,
    private type: TransactionType,
    private date: Date,
    private client: Client
  ) {}

  get getId() {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getType() {
    return this.type;
  }

  set setType(value: TransactionType) {
    this.type = value;
  }

  get getDate() {
    return this.date;
  }

  set setDate(value: Date) {
    this.date = value;
  }

  get getClient() {
    return this.client;
  }

  set setClient(value: Client) {
    this.client = value;
  }
}
