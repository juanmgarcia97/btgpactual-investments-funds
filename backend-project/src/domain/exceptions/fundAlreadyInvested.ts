export default class FundAlreadyInvested extends Error {
  constructor() {
    super('Ya has invertido en este fondo.');
  }
}