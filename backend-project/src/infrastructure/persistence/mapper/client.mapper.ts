import Client from '../../../domain/client';
import {ClientEntity} from '../entity/client.entity';

export default class ClientMapper {
  static toDomain(entity: any): Client {
    const domain = new Client(entity.id, entity.name);
    domain.setBalance = entity.balance;
    domain.setInvestments = entity.investments;
    return domain;
  }

  static toEntity(domain: Client) {
    const entity = new ClientEntity();
    entity.id = domain.getId;
    entity.name = domain.getName;
    entity.balance = domain.getBalance;
    entity.investments = domain.getInvestments;
    return entity;
  }
}