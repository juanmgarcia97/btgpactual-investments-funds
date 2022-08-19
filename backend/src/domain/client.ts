export default class Client {
  constructor(
    private id: string,
    private name: string,
    private amount: number
  ) {
    this.id = '1143873318';
    (this.name = 'Juan Martin Garcia'), (this.amount = 500000);
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getAmount() {
    return this.amount;
  }
}
