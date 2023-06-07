import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientsSchema } from 'src/clients/schema/Clients';

@Module({
  imports:[MongooseModule.forFeature([{name:Client.name,schema:ClientsSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
