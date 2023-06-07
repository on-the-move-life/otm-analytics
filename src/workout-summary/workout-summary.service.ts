import { Injectable } from '@nestjs/common';
import { CreateWorkoutSummaryDto } from './dto/create-workout-summary.dto';
import { UpdateWorkoutSummaryDto } from './dto/update-workout-summary.dto';

@Injectable()
export class WorkoutSummaryService {
  create(createWorkoutSummaryDto: CreateWorkoutSummaryDto) {
    return 'This action adds a new workoutSummary';
  }

  findAll() {
    return `This action returns all workoutSummary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutSummary`;
  }

  update(id: number, updateWorkoutSummaryDto: UpdateWorkoutSummaryDto) {
    return `This action updates a #${id} workoutSummary`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutSummary`;
  }
}
