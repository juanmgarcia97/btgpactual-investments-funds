import Client from '../domain/client';

export interface ClientRepository {
  findById(id: string): Promise<Client>;
  create(client: Client): Promise<Client>;
  update(client: Client): Promise<void>;
}