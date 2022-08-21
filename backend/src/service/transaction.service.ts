import TransactionDTO from '../controller/dto/transaction.dto';
import Transaction from '../domain/transaction';

export interface TransactionService {
  findAllTransactions(): Promise<Transaction[]>;
  createTransaction(transaction: TransactionDTO): Promise<void>;
}
