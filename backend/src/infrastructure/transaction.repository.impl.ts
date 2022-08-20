import transaction from '../domain/transaction';
import { TransactionRepository } from '../repository/transaction.repository';
import { injectable } from 'inversify';
import { MongoRepository } from 'typeorm';
import { mongoDataSource } from './db.config';
import TransactionEntity from './persistence/entity/transaction.entity';
import Transaction from '../domain/transaction';
import TransactionMapper from './persistence/mapper/transaction.mapper';

@injectable()
export default class TransactionRepositoryImpl implements TransactionRepository {

    private transactionRepositoryORM: MongoRepository<TransactionEntity>;

    constructor() {
        this.transactionRepositoryORM =
            mongoDataSource.getMongoRepository(TransactionEntity);
    }

    async findAllTransactions(): Promise<transaction[]> {
        const transactionEntities = await this.transactionRepositoryORM.find();
        return TransactionMapper.toDomainList(transactionEntities);
    }

    async createTransaction(transaction: transaction): Promise<Transaction> {
        const transactionEntity = await this.transactionRepositoryORM.save(TransactionMapper.toEntity(transaction));
        return TransactionMapper.toDomain(transactionEntity);
    }

}