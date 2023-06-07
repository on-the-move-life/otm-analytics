import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutSummaryService } from './workout-summary.service';

@Controller('workout-summary')
export class WorkoutSummaryController {
  constructor(private readonly workoutSummaryService: WorkoutSummaryService ){}
  

  @Get()
  async findAll() {
    return await this.workoutSummaryService.findAll();
  }

}
