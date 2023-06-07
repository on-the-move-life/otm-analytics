import { Module } from '@nestjs/common';
import { WorkoutSummaryService } from './workout-summary.service';
import { WorkoutSummaryController } from './workout-summary.controller';
import { ClientsModule } from 'src/clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutSummary, WorkoutSummarySchema } from './schema/WorkoutSummary';

@Module({
  
  imports:[MongooseModule.forFeature([{name:WorkoutSummary.name,schema:WorkoutSummarySchema}]),ClientsModule],
  controllers: [WorkoutSummaryController],
  providers: [WorkoutSummaryService]
})
export class WorkoutSummaryModule {
  constructor(){
    // console.log("x",ClientsModule)
    
  }
}
