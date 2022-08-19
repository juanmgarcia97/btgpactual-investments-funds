export type InvestmentFund = {
  id: number
  name: string
  minimumAmount: InvestmentFundAmount
  category: FundCategory
}

export enum FundCategory {
  FPV = 'Fondo Voluntario de Pensión',
  FIC = 'Fondo de Inversión Colectiva'
}

export enum InvestmentFundAmount {
  FPV_BTG_PACTUAL_RECAUDADORA = 75000,
  FPV_BTG_PACTUAL_ECOPETROL = 125000,
  DEUDAPRIVADA = 50000,
  FDO_ACCIONES = 250000,
  FPV_BTG_PACTUAL_DINAMICA = 100000
}

export enum TransactionType {
  OPENING = 'Apertura',
  CLOSING = 'Cancelación'
}