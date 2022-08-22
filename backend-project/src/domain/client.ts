import {
  InvestmentFundAmount,
  TransactionType,
  InvestmentFund,
  funds,
} from './types';
import NotEnoughBalance from './exceptions/notEnoughBalance';
import FundAlreadyInvested from './exceptions/fundAlreadyInvested';
import InvalidFundClosing from './exceptions/invalidFundClosing';
import InvalidMinAmount from './exceptions/invalidMinAmount';

export default class Client {
  private balance: number;
  private investments: InvestmentFund[];
  constructor(private id: string, private name?: string) {
    name ? (this.name = name) : (this.name = 'anonimo');
    this.balance = 500000;
    this.investments = [];
  }

  get getId() {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getName() {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getBalance() {
    return this.balance;
  }

  set setBalance(value: number) {
    this.balance = value;
  }

  get getInvestments() {
    return this.investments;
  }

  set setInvestments(value: InvestmentFund[]) {
    this.investments = value;
  }

  validateExistentFund(fund: InvestmentFund, type: string) {
    const investment = this.investments.includes(fund);
    if (investment && type === TransactionType.OPENING)
      throw new FundAlreadyInvested();
    if (!investment && type === TransactionType.CLOSING)
      throw new InvalidFundClosing();
  }

  validateMinimumAmount(fund: InvestmentFund, amount: number) {
    if (amount < fund.minAmount)
      throw new InvalidMinAmount(fund.name, amount);
  }

  validateBalance(fund: string, amount: number, multiplier: number) {
    if (this.balance < amount) throw new NotEnoughBalance(fund);
    this.balance += multiplier * amount;
  }

  subscribe(fund: InvestmentFund, amount: number) {
    this.validateBalance(fund.name, amount, -1);
    this.validateMinimumAmount(fund, amount);
    this.investments.push(fund);
  }
  
  unsubscribe(fund: InvestmentFund, amount: number) {
    this.validateBalance(fund.name, amount, 1);
    this.validateMinimumAmount(fund, amount);
    const elementIndex = funds.findIndex((element) => element === fund);
    this.investments.splice(elementIndex, 1);
  }
}
