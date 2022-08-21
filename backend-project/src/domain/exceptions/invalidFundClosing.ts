export default class InvalidFundClosing extends Error {
  constructor() {
    super('No puedes salirte de un fondo en el que no has invertido.');
  }
}