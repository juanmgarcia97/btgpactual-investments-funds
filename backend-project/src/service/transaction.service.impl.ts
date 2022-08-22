import { inject, injectable } from 'inversify';
import Transaction from '../domain/transaction';
import { DI, InvestmentFund, TransactionType } from '../domain/types';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../repository/transaction.repository';
import TransactionDTO from '../controller/dto/transaction.dto';
import TransactionMapper from '../infrastructure/persistence/mapper/transaction.mapper';
import { ClientRepository } from '../repository/client.repository';
import InvalidTransaction from '../domain/exceptions/invalidTransaction';

@injectable()
export default class TransactionServiceImpl implements TransactionService {
  constructor(
    @inject(DI.TransactionRepository)
    private transactionRepository: TransactionRepository,
    @inject(DI.ClientRepository)
    private clientRepository: ClientRepository
  ) {}

  async findAllTransactions(): Promise<Transaction[]> {
    return await this.transactionRepository.findAllTransactions();
  }

  async createTransaction(transactionDTO: TransactionDTO): Promise<void> {
    if (
      !transactionDTO.amount &&
      transactionDTO.type === TransactionType.OPENING
    )
      throw new InvalidTransaction();
    if (!transactionDTO.client) throw new InvalidTransaction();
    if (!transactionDTO.date) throw new InvalidTransaction();
    if (!transactionDTO.fund) throw new InvalidTransaction();
    if (!transactionDTO.type) throw new InvalidTransaction();
    const transaction = TransactionMapper.fromDTOtoDomain(transactionDTO);
    const client = await this.clientRepository.findById(transactionDTO.client);
    transaction.setClient = client;
    this.validateTransaction(transaction);
    this.validateBalance(transaction);
    await this.transactionRepository.createTransaction(transaction);
    await this.clientRepository.update(transaction.getClient);
  }

  private validateTransaction(transaction: Transaction) {
    const client = transaction.getClient;
    client.validateExistentFund(transaction);
  }

  private validateBalance(transaction: Transaction) {
    const client = transaction.getClient;
    transaction.getType == TransactionType.OPENING
      ? client.subscribe(transaction)
      : client.unsubscribe(transaction);
  }
}
