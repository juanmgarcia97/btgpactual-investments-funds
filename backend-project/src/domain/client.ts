import { InvestmentFunds, InvestmentFundAmount, TransactionType, InvestmentFund, funds } from './types';
import NotEnoughBalance from './exceptions/notEnoughBalance';
import InvalidFund from './exceptions/invalidFund';
import FundAlreadyInvested from './exceptions/fundAlreadyInvested';
import InvalidFundClosing from './exceptions/invalidFundClosing';

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

  validateFund(fund: string, type: string) {
    const investment = this.investments.find(
      (element) => element.name === fund
    );
    if (investment && type === TransactionType.OPENING) throw new FundAlreadyInvested();
    if(!investment && type === TransactionType.CLOSING) throw new InvalidFundClosing();
  }

  subscribe(fund: string) {
    switch (fund) {
    case InvestmentFunds.FPV_BTG_PACTUAL_RECAUDADORA:
      if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_RECAUDADORA)
        throw new NotEnoughBalance(fund);
      this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_RECAUDADORA;
      break;
    case InvestmentFunds.FPV_BTG_PACTUAL_ECOPETROL:
      if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_ECOPETROL)
        throw new NotEnoughBalance(fund);
      this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_ECOPETROL;
      break;
    case InvestmentFunds.FPV_BTG_PACTUAL_DINAMICA:
      if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_DINAMICA)
        throw new NotEnoughBalance(fund);
      this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_DINAMICA;
      break;
    case InvestmentFunds.FDO_ACCIONES:
      if (this.balance < InvestmentFundAmount.FDO_ACCIONES)
        throw new NotEnoughBalance(fund);
      this.balance -= InvestmentFundAmount.FDO_ACCIONES;
      break;
    case InvestmentFunds.DEUDAPRIVADA:
      if (this.balance < InvestmentFundAmount.DEUDAPRIVADA)
        throw new NotEnoughBalance(fund);
      this.balance -= InvestmentFundAmount.DEUDAPRIVADA;
      break;
    default:
      throw new InvalidFund();
    }
    const invest = funds.find((element) => element.name === fund);
    invest ? this.investments.push(invest) : 0;
  }

  unsubscribe(fund: string) {
    switch (fund) {
    case InvestmentFunds.FPV_BTG_PACTUAL_RECAUDADORA:
      this.balance += InvestmentFundAmount.FPV_BTG_PACTUAL_RECAUDADORA;
      break;
    case InvestmentFunds.FPV_BTG_PACTUAL_ECOPETROL:
      this.balance += InvestmentFundAmount.FPV_BTG_PACTUAL_ECOPETROL;
      break;
    case InvestmentFunds.FPV_BTG_PACTUAL_DINAMICA:
      this.balance += InvestmentFundAmount.FPV_BTG_PACTUAL_DINAMICA;
      break;
    case InvestmentFunds.FDO_ACCIONES:
      this.balance += InvestmentFundAmount.FDO_ACCIONES;
      break;
    case InvestmentFunds.DEUDAPRIVADA:
      this.balance += InvestmentFundAmount.DEUDAPRIVADA;
      break;
    default:
      throw new InvalidFund();
    }
    const elementIndex = funds.findIndex(
      (element) => element.name === fund
    );
    this.investments.splice(elementIndex, 1);
  }
}
