import { Module } from '@nestjs/common';
import { WorkoutSummaryService } from './workout-summary.service';
import { WorkoutSummaryController } from './workout-summary.controller';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
  imports:[ClientsModule],
  controllers: [WorkoutSummaryController],
  providers: [WorkoutSummaryService]
})
export class WorkoutSummaryModule {
  constructor(){
    // console.log("x",ClientsModule)
    
  }
}
