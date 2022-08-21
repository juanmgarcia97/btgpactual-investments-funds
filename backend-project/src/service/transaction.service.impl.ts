import { inject, injectable } from 'inversify';
import Transaction from '../domain/transaction';
import { DI, TransactionType } from '../domain/types';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../repository/transaction.repository';
import TransactionDTO from '../controller/dto/transaction.dto';
import TransactionMapper from '../infrastructure/persistence/mapper/transaction.mapper';
import { ClientRepository } from '../repository/client.repository';

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
    const investmentFund = transaction.getFund;
    const transactionType = transaction.getType;
    client.validateFund(investmentFund, transactionType);
  }

  private validateBalance(transaction: Transaction) {
    const client = transaction.getClient;
    const investmentFund = transaction.getFund;
    transaction.getType == TransactionType.OPENING
      ? client.subscribe(investmentFund)
      : client.unsubscribe(investmentFund);
  }
}
