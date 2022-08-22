export enum InvestmentFunds {
  FPV_BTG_PACTUAL_RECAUDADORA = 'FPV_BTG_PACTUAL_RECAUDADORA',
  FPV_BTG_PACTUAL_ECOPETROL = 'FPV_BTG_PACTUAL_ECOPETROL',
  DEUDAPRIVADA = 'DEUDAPRIVADA',
  FDO_ACCIONES = 'FDO-ACCIONES',
  FPV_BTG_PACTUAL_DINAMICA = 'FPV_BTG_PACTUAL_DINAMICA',
}

export enum FundCategory {
  FPV = 'Fondo Voluntario de Pensión',
  FIC = 'Fondo de Inversión Colectiva',
}

export const InvestmentFundAmount: { [key: string]: number } = {
  FPV_BTG_PACTUAL_RECAUDADORA: 75000,
  FPV_BTG_PACTUAL_ECOPETROL: 125000,
  DEUDAPRIVADA: 50000,
  FDO_ACCIONES: 250000,
  FPV_BTG_PACTUAL_DINAMICA: 100000,
};

export enum TransactionType {
  OPENING = 'Apertura',
  CLOSING = 'Cancelacion',
}

export const DI = {
  TransactionRepository: Symbol.for('TransactionRepository'),
  TransactionService: Symbol.for('TransactionService'),
  TransactionController: Symbol.for('TransactionController'),
  ClientRepository: Symbol.for('ClientRepository'),
  ClientService: Symbol.for('ClientService'),
  ClientController: Symbol.for('ClientController'),
};

export type InvestmentFund = {
  id: number;
  name: string;
  minAmount: number;
  category: string;
};

export const funds: InvestmentFund[] = [
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
  },
];
