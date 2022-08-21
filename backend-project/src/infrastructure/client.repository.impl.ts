import { injectable } from 'inversify';
import Client from '../domain/client';
import ClientNotFound from '../domain/exceptions/clientNotFound';
import { ClientRepository } from '../repository/client.repository';
import { ClientEntity } from './persistence/entity/client.entity';
import ClientMapper from './persistence/mapper/client.mapper';

@injectable()
export default class ClientRepositoryImpl implements ClientRepository {
  async create(client: Client): Promise<Client> {
    const clientEntity = ClientMapper.toEntity(client);
    await clientEntity.save();
    return client;
  }

  async findById(id: string): Promise<Client> {
    const clientEntity = await ClientEntity.findOne({ where: { id } });
    if (!clientEntity) throw new ClientNotFound(id);
    return ClientMapper.toDomain(clientEntity);
  }

  async update(client: Client) {
    const filter = { id: client.getId };
    const update = {
      balance: client.getBalance,
      investments: client.getInvestments,
    };
    await ClientEntity.findOneAndUpdate(filter, update, { new: true });
  }
}
