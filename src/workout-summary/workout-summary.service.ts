import { Injectable } from '@nestjs/common';
import { WorkoutSummary, WorkoutSummaryDocument } from './schema/WorkoutSummary';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WorkoutSummaryService {
  constructor( 
    @InjectModel
    (WorkoutSummary.name)
    private workoutSummaryModel:Model<WorkoutSummaryDocument>
  ) {}
  
  async findAll(): Promise<WorkoutSummaryDocument[]> {
    return await this.workoutSummaryModel.find().sort({"_id": -1});     
  } 

  async findOne(memberName:string): Promise<WorkoutSummaryDocument> {
    return await this.workoutSummaryModel.findOne({name:memberName},null,{sort:{_id:-1}});     
  } 

}
