export type InvestmentFund = {
  id: number;
  name: string;
  minAmount: number;
  category: string;
};

export type Client = {
  id: string;
  name: string;
  balance?: number;
  investments?: InvestmentFund[];
};

export type Transaction = {
  id?: string;
  type: string;
  date: string;
  fund: string;
  client: string | Client;
};

export type Response = {
  data: unknown,
  message: string
}
