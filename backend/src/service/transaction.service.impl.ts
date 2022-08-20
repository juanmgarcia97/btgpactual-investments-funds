import { inject, injectable } from 'inversify';
import Transaction from '../domain/transaction';
import { DI, TransactionType } from '../domain/types';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../repository/transaction.repository';

@injectable()
export default class TransactionServiceImpl implements TransactionService {

    constructor(@inject(DI.TransactionRepository) private transactionRepository: TransactionRepository) { }

    async findAllTransactions(): Promise<Transaction[]> {
        return await this.transactionRepository.findAllTransactions();
    }

    async createTransaction(transaction: Transaction): Promise<void> {
        this.validateTransaction(transaction);
        await this.transactionRepository.createTransaction(transaction);
    }

    private validateTransaction(transaction: Transaction) {
        const client = transaction.getClient;
        const investmentFund = transaction.getFund;
        transaction.getType == TransactionType.OPENING ? client.subscribe(investmentFund) : client.unsubscribe(investmentFund);
    }

}