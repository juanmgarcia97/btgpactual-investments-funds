import { InvestmentFunds, InvestmentFundAmount } from './types';
import NotEnoughBalance from './exceptions/notEnoughBalance';
import InvalidFund from './exceptions/invalidFund';
export default class Client {
  private id: string;
  private name: string;
  private balance: number;
  constructor() {
    this.id = '1143873318';
    this.name = 'Juan Martin Garcia';
    this.balance = 500000;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getBalance() {
    return this.balance;
  }

  subscribe(fund: string) {
    switch (fund) {
      case InvestmentFunds.FPV_BTG_PACTUAL_RECAUDADORA:
        if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_RECAUDADORA) throw new NotEnoughBalance(InvestmentFunds.FPV_BTG_PACTUAL_RECAUDADORA);
        this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_RECAUDADORA;
        break;
      case InvestmentFunds.FPV_BTG_PACTUAL_ECOPETROL:
        if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_ECOPETROL) throw new NotEnoughBalance(InvestmentFunds.FPV_BTG_PACTUAL_ECOPETROL);
        this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_ECOPETROL;
        break;
      case InvestmentFunds.FPV_BTG_PACTUAL_DINAMICA:
        if (this.balance < InvestmentFundAmount.FPV_BTG_PACTUAL_DINAMICA) throw new NotEnoughBalance(InvestmentFunds.FPV_BTG_PACTUAL_DINAMICA);
        this.balance -= InvestmentFundAmount.FPV_BTG_PACTUAL_DINAMICA;
        break;
      case InvestmentFunds.FDO_ACCIONES:
        if (this.balance < InvestmentFundAmount.FDO_ACCIONES) throw new NotEnoughBalance(InvestmentFunds.FDO_ACCIONES);
        this.balance -= InvestmentFundAmount.FDO_ACCIONES;
        break;
      case InvestmentFunds.DEUDAPRIVADA:
        if (this.balance < InvestmentFundAmount.DEUDAPRIVADA) throw new NotEnoughBalance(InvestmentFunds.DEUDAPRIVADA);
        this.balance -= InvestmentFundAmount.DEUDAPRIVADA;
        break;
      default:
        throw new InvalidFund();
    }
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
  }
}
