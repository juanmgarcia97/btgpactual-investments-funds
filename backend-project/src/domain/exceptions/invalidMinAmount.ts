export default class InvalidMinAmount extends Error {
  constructor(fund: string, amount: number) {
    super(`El monto de ${amount} no cumple el monto mínimo del fondo ${fund}`);
  }
}
