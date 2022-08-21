export default class ClientNotFound extends Error {
  constructor(id: string) {
    super(`El cliente con id ${id} no existe`);
  }
}