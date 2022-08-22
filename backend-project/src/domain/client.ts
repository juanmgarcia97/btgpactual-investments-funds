import {
  InvestmentFundAmount,
  TransactionType,
  InvestmentFund,
  funds,
  FundInvested,
} from './types';
import NotEnoughBalance from './exceptions/notEnoughBalance';
import FundAlreadyInvested from './exceptions/fundAlreadyInvested';
import InvalidFundClosing from './exceptions/invalidFundClosing';
import InvalidMinAmount from './exceptions/invalidMinAmount';
import Transaction from './transaction';

export default class Client {
  private balance: number;
  private investments: FundInvested[];
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

  set setInvestments(value: FundInvested[]) {
    this.investments = value;
  }

  validateExistentFund(transaction: Transaction) {
    const investment = this.investments.find(
      (element) => element.name === transaction.getFund.name
    );
    if (investment && transaction.getType === TransactionType.OPENING)
      throw new FundAlreadyInvested();
    if (!investment && transaction.getType === TransactionType.CLOSING)
      throw new InvalidFundClosing();
  }

  validateMinimumAmount(fund: InvestmentFund, amount: number) {
    if (amount < fund.minAmount) throw new InvalidMinAmount(fund.name, amount);
  }

  validateBalance(transaction: Transaction) {
    const fund = transaction.getFund.name;
    const amount = transaction.getAmount;
    if (!amount) {
      const investedFund = this.investments.find(element => element.name === fund);
      this.balance += investedFund?.amount ?? 0;
      return;
    }
    if (this.balance < amount) throw new NotEnoughBalance(fund);
    this.balance -= amount
  }

  subscribe(transaction: Transaction) {
    const fund = transaction.getFund;
    const amount = transaction.getAmount;
    this.validateBalance(transaction);
    this.validateMinimumAmount(fund, amount);
    this.investments.push({
      name: fund.name,
      amount,
    });
  }

  unsubscribe(transaction: Transaction) {
    this.validateBalance(transaction);
    const elementIndex = this.investments.findIndex(
      (element) => element.name === transaction.getFund.name
    );
    this.investments.splice(elementIndex, 1);
  }
}
