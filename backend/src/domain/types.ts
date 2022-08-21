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

export enum InvestmentFundAmount {
  FPV_BTG_PACTUAL_RECAUDADORA = 75000,
  FPV_BTG_PACTUAL_ECOPETROL = 125000,
  DEUDAPRIVADA = 50000,
  FDO_ACCIONES = 250000,
  FPV_BTG_PACTUAL_DINAMICA = 100000,
}

export enum TransactionType {
  OPENING = 'Apertura',
  CLOSING = 'Cancelación',
}

export const DI = {
  TransactionRepository: Symbol.for('TransactionRepository'),
  TransactionService: Symbol.for('TransactionService'),
  TransactionController: Symbol.for('TransactionController'),
  ClientRepository: Symbol.for('ClientRepository'),
  ClientService: Symbol.for('ClientService'),
  ClientController: Symbol.for('ClientController'),
};
