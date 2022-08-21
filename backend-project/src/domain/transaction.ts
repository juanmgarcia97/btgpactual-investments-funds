import Client from './client';

export default class Transaction {
  constructor(
    private id: string,
    private type: string,
    private fund: string,
    private date: Date,
    private client: Client
  ) {
  }

  get getId() {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getType() {
    return this.type;
  }

  set setType(value: string) {
    this.type = value;
  }

  get getFund() {
    return this.fund;
  }

  set setFund(value: string) {
    this.fund = value;
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
