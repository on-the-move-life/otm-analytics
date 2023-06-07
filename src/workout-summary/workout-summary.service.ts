import { Injectable } from '@nestjs/common';
import { CreateWorkoutSummaryDto } from './dto/create-workout-summary.dto';
import { UpdateWorkoutSummaryDto } from './dto/update-workout-summary.dto';
import { ClientsService } from 'src/clients/clients.service';
import { WorkoutSummary, WorkoutSummaryDocument } from './schema/WorkoutSummary';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WorkoutSummaryService {
  constructor( @InjectModel(WorkoutSummary.name)private workoutSummaryModel:Model<WorkoutSummaryDocument> ,private readonly clientService: ClientsService){}
  
  async findAll(): Promise<WorkoutSummaryDocument[]> {
    return await this.workoutSummaryModel.find();
     
  }

  // async findAll() {
  //   // return this.workoutSummaryService.findAll();
  //    const temp=await this.clientService.findAll();
  //    let members=temp[0].members
  //    console.log(members)
  //    return temp;
  // }

}
