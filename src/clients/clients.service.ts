import { Injectable } from '@nestjs/common';
import { Client, ClientsDocument } from './schema/Clients';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class ClientsService {

  constructor(
    @InjectModel
      (Client.name)
    private clientsModel: Model<ClientsDocument>,
    private memberService: MemberService
  ) { }

  async findAll(): Promise<ClientsDocument[]> {
    return await this.clientsModel.find();
  }

  async getMemberLastActivity() {

    let workoutPerformed = [],noWorkoutPerformed=[],res=[]
    const clients = await this.findAll()
    // console.log("clients",clients)
    for (let i = 0; i < clients.length; i++) {
      const programInfo = clients[i];
      // console.log(programInfo)
      for (let j = 0; j < programInfo.members.length; j++) {
        const memberCode = programInfo.members[j];
        // console.log(memberCode);        
        const lastWorkout = await this.memberService.getMemberWorkoutSummaryLatest(memberCode)
        // console.log(memberCode,"works",lastWorkout.name)
        if (lastWorkout && lastWorkout.created) {
          let dateBefore = lastWorkout.created
          let dateToday = new Date();
          // console.log(memberCode,"before",lastWorkout.created,"today",new Date());
          let timeDifference = Math.abs(dateToday.getTime() - dateBefore.getTime());
          let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
          // console.log(differentDays)
          workoutPerformed.push({
            code: memberCode,
            daysBefore: differentDays
          })
        }
        else if(!lastWorkout){
          noWorkoutPerformed.push({
            code: memberCode,
          })
        }
      }
    }
    const key='daysBefore'
    workoutPerformed.sort((a, b) => b.daysBefore - a.daysBefore)
    // console.log("x",new Map[workoutPerformed[0][key],workoutPerformed[0]].values())
    workoutPerformed = [...new Map(workoutPerformed.map(item =>
      [item[key], item])).values()
    ];
    res.push({
      workoutPerformed:workoutPerformed,
      noWorkoutPerformed:noWorkoutPerformed
    })
    return res;

  }



}
