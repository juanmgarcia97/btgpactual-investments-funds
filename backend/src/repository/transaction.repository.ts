import Transaction from '../domain/transaction';
export interface TransactionRepository {
    findAllTransactions(): Promise<Transaction[]>;
    createTransaction(transaction: Transaction): Promise<Transaction>;
}