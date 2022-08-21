import TransactionDTO from '../../../controller/dto/transaction.dto';
import Client from '../../../domain/client';
import Transaction from '../../../domain/transaction';
import { TransactionEntity } from '../entity/transaction.entity';

export default class TransactionMapper {
  static toDomain(entity: any): Transaction {
    return new Transaction(
      entity._id,
      entity.type,
      entity.fund,
      new Date(entity.date),
      entity.client
    );
  }

  static fromDTOtoDomain(dto: TransactionDTO) {
    return new Transaction(
      dto.id,
      dto.type,
      dto.fund,
      new Date(dto.date),
      new Client(dto.client)
    );
  }

  static toEntity(domain: Transaction) {
    return new TransactionEntity({
      id: domain.getId,
      type: domain.getType,
      fund: domain.getFund,
      date: domain.getDate.toUTCString(),
      client: domain.getClient,
    });
  }

  static toDomainList(entities: any[]): Transaction[] {
    return entities.map(this.toDomain);
  }

  static toEntityList(domains: Transaction[]) {
    return domains.map(this.toEntity);
  }

  static toDTO(domain: Transaction) {
    return {
      id: domain.getId,
      type: domain.getType,
      fund: domain.getFund,
      date: domain.getDate,
      client: domain.getClient,
    };
  }
}
