export default class InvalidFund extends Error {
    constructor() {
        super('El nombre del fondo es inválido.')
    }
}