import Transaction from "../domain/transaction";

export interface TransactionService {
    findAllTransactions(): Promise<Transaction[]>;
    createTransaction(transaction: Transaction): Promise<void>;
}