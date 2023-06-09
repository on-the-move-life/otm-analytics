import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientsService } from 'src/clients/clients.service';
import { WorkoutSummaryService } from 'src/workout-summary/workout-summary.service';
// import { CreateMemberDto } from './dto/create-member.dto';
// import { UpdateMemberDto } from './dto/update-member.dto';
import { Member, MembersDocument } from './schema/Members';

@Injectable()
export class MemberService {

  constructor(
    @InjectModel
    (Member.name) 
    private membersModel: Model<MembersDocument>,
    private workoutSummaryService: WorkoutSummaryService
  ){  }


  
  // create(createMemberDto: CreateMemberDto) {
  //   return 'This action adds a new member';
  // }

  findAll() {
    return this.membersModel.find();
  }

  async getMemberWorkoutSummaryLatest(memberCode) {

    const memberInfo = await this.findOneByCode(memberCode)
    // get all programs
    const workoutSummaryData = await this.workoutSummaryService.findOne(memberInfo.name) 
    return workoutSummaryData

  }

  findOneByCode(memberCode: string) {
    return this.membersModel.findOne({
      code: memberCode
    })
  }

  // update(id: number, updateMemberDto: UpdateMemberDto) {
  //   return `This action updates a #${id} member`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} member`;
  // }
}
