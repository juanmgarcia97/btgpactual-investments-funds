
import Transaction from '../../../domain/transaction';
import TransactionEntity from '../entity/transaction.entity';

export default class TransactionMapper {
    static toDomain(entity: any): Transaction {
        return new Transaction(
            entity._id,
            entity.type,
            entity.fund,
            entity.date,
        );
    }

    static toEntity(domain: Transaction) {
        const entity = new TransactionEntity();
        entity._id = domain.getId;
        entity.type = domain.getType;
        entity.fund = domain.getFund;
        entity.date = domain.getDate.toUTCString();
        return entity;
    }

    static toDomainList(entities: any[]): Transaction[] {
        return entities.map(this.toDomain);
    }

    static toEntityList(domains: Transaction[]) {
        return domains.map(this.toEntity);
    }
}