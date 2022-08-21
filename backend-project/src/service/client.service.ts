import Client from '../domain/client';

export interface ClientService {
  findById(id: string): Promise<Client>;
  create(client: Client): Promise<Client>;
}