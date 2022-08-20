export default class NotEnoughBalance extends Error {
    constructor(fund: string) {
        super(`No tiene saldo disponible para vincularse al fondo ${fund}`);
    }
}