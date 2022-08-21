import { InvestmentFunds, InvestmentFundAmount } from './types';
import NotEnoughBalance from './exceptions/notEnoughBalance';
import InvalidFund from './exceptions/invalidFund';
import FundAlreadyInvested from './exceptions/fundAlreadyInvested';
export default class Client {
  private balance: number;
  private readonly funds = [
    {
      id: 1,
      name: 'FPV_BTG_PACTUAL_RECAUDADORA',
      minAmount: 75000,
      category: 'FPV',
    },
    {
      id: 2,
      name: 'FPV_BTG_PACTUAL_ECOPETROL',
      minAmount: 125000,
      category: 'FPV',
    },
    {
      id: 3,
      name: 'DEUDAPRIVADA',
      minAmount: 50000,
      category: 'FPV',
    },
    {
      id: 4,
      name: 'FDO-ACCIONES',
      minAmount: 250000,
      category: 'FPV',
    },
    {
      id: 5,
      name: 'FPV_BTG_PACTUAL_DINAMICA',
      minAmount: 100000,
      category: 'FPV',
    }
  ];
  private investments: any[];
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

  set setInvestments(value: any[]) {
    this.investments = value;
  }

  validateFund(fund: string) {
    const investment = this.investments.find(
      (element) => element.name === fund
    );
    if (investment) throw new FundAlreadyInvested();
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
    this.investments.push(this.funds.find((element) => element.name === fund));
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
    const elementIndex = this.funds.findIndex(
      (element) => element.name === fund
    );
    this.investments.splice(elementIndex, 1);
  }
}
