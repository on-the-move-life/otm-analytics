import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutSummaryService } from './workout-summary.service';
import { CreateWorkoutSummaryDto } from './dto/create-workout-summary.dto';
import { UpdateWorkoutSummaryDto } from './dto/update-workout-summary.dto';
import { ClientsService } from 'src/clients/clients.service';

@Controller('workout-summary')
export class WorkoutSummaryController {
  constructor(private readonly workoutSummaryService: WorkoutSummaryService , private readonly clientService: ClientsService){}
  

  @Get()
  async findAll() {
    // return this.workoutSummaryService.findAll();
     let temp=await this.clientService.findAll();
     console.log("x",temp[0].members)
     return temp;
  }

}
