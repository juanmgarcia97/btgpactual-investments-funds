import { Request, Response as ExpressResponse } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import Client from '../domain/client';
import { DI } from '../domain/types';
import { ClientService } from '../service/client.service';
import Response from './response';

@controller('/clients')
export default class ClientController extends BaseHttpController {
  constructor(@inject(DI.ClientService) private clientService: ClientService) {
    super();
  }

  @httpGet('/:id')
  private async findById(@requestParam('id') id: string, @response() res: ExpressResponse) {
    const client = await this.clientService.findById(id);
    Response.ok(res, client);
  }

  @httpPost('/')
  private async create(@request() req: Request, @response() res: ExpressResponse) {
    const clientBody = req.body;
    const client = new Client(clientBody.id, clientBody.name);
    const clientResponse = await this.clientService.create(client);
    Response.created(res, clientResponse, 'Cliente creado satisfactoriamente.');
  }
}
