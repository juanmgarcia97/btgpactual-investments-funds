import { Request, Response as ExpressResponse } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  next,
  request,
  response,
} from 'inversify-express-utils';
import { DI } from '../domain/types';
import { TransactionService } from '../service/transaction.service';
import Response from './response';

@controller('/transactions')
export class TransactionController extends BaseHttpController {
  constructor(
    @inject(DI.TransactionService)
    private transactionService: TransactionService
  ) {
    super();
  }

  @httpGet('/')
  private async findAll(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const transactions = await this.transactionService.findAllTransactions();
    Response.ok(res, transactions);
  }

  @httpPost('/')
  private async create(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    await this.transactionService.createTransaction(req.body);
    Response.created(res, req.body, 'Transacción creada satisfactoriamente.');
  }
}
