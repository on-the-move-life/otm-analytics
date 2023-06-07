import { Injectable } from '@nestjs/common';
import { Client, ClientsDocument } from './schema/Clients';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientsService {

  constructor(@InjectModel(Client.name) private clientsModel:Model<ClientsDocument>){  }

  async findAll(): Promise<ClientsDocument[]> {
    return await this.clientsModel.find();
  }

  

}
