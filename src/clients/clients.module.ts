import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientsSchema } from './schema/Clients';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Client.name,schema:ClientsSchema}]),
    MemberModule
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
