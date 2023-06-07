import { Module } from '@nestjs/common';
import { WorkoutSummaryService } from './workout-summary.service';
import { WorkoutSummaryController } from './workout-summary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutSummary, WorkoutSummarySchema } from './schema/WorkoutSummary';

@Module({
  
  imports:[
    MongooseModule.forFeature([{name:WorkoutSummary.name,schema:WorkoutSummarySchema}])    
  ],
  controllers: [WorkoutSummaryController],
  providers: [WorkoutSummaryService],
  exports: [WorkoutSummaryService]
})
export class WorkoutSummaryModule {
  constructor(){
  }
}
