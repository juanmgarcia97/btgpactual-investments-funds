import { Container } from "inversify"
import { DI } from './domain/types';
import { TransactionRepository } from './repository/transaction.repository';
import TransactionRepositoryImpl from './infrastructure/transaction.repository.impl';
import { TransactionService } from './service/transaction.service';
import TransactionServiceImpl from './service/transaction.service.impl';
import { TransactionController } from './controller/transaction.controller';

export const container = new Container();

container.bind<TransactionRepository>(DI.TransactionRepository).to(TransactionRepositoryImpl);
container.bind<TransactionService>(DI.TransactionService).to(TransactionServiceImpl);
container.bind<TransactionController>(DI.TransactionController).to(TransactionController);