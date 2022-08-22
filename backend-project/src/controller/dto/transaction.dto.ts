import { InvestmentFund } from '../../domain/types';
export default class TransactionDTO {
  id!: string;
  type!: string;
  fund!: InvestmentFund;
  date!: string;
  amount!: number;
  client!: string;
}
