import { TransactionRepository } from '../repository/transaction.repository';
import { injectable } from 'inversify';
import { TransactionEntity } from './persistence/entity/transaction.entity';
import Transaction from '../domain/transaction';
import TransactionMapper from './persistence/mapper/transaction.mapper';

@injectable()
export default class TransactionRepositoryImpl implements TransactionRepository {
  async findAllTransactions(): Promise<Transaction[]> {
    const transactionEntities = await TransactionEntity.find();
    return TransactionMapper.toDomainList(transactionEntities);
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    const transactionEntity = TransactionMapper.toEntity(transaction);
    await transactionEntity.save();
    return transaction;
  }
}
