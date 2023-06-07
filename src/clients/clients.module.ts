import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientsSchema } from './schema/Clients';
import { WorkoutSummaryModule } from 'src/workout-summary/workout-summary.module';

@Module({
  imports:[MongooseModule.forFeature([{name:Client.name,schema:ClientsSchema}])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports:[ClientsService]
})
export class ClientsModule {}
