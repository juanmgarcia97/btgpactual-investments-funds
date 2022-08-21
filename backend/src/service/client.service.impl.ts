import { inject, injectable } from 'inversify';
import client from '../domain/client';
import { DI } from '../domain/types';
import { ClientRepository } from '../repository/client.repository';
import { ClientService } from './client.service';

@injectable()
export default class ClientServiceImpl implements ClientService {
  constructor(
    @inject(DI.ClientRepository) private clientRepository: ClientRepository
  ) {}

  async findById(id: string): Promise<client> {
    return await this.clientRepository.findById(id);
  }

  async create(client: client): Promise<client> {
    return await this.clientRepository.create(client);
  }
}
