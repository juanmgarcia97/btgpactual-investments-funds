export default class InvalidTransaction extends Error {
  constructor() {
    super('No se puede crear la transacción debido a una propiedad faltante.')
  }
}