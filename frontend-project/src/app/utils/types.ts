export type InvestmentFund = {
  id: number;
  name: string;
  minAmount: number;
  category: string;
};

export type FundInvested = {
  name: string;
  amount: number;
};

export type Client = {
  id: string;
  name: string;
  balance?: number;
  investments?: FundInvested[];
};

export type Transaction = {
  id?: string;
  type: string;
  date: string;
  fund: InvestmentFund;
  amount?: number;
  client: string | Client;
};

export type Response = {
  data: unknown;
  message: string;
};
