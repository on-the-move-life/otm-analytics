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
    private clientsModel:Model<ClientsDocument>,
    private memberService: MemberService
  ){  }

  async findAll(): Promise<ClientsDocument[]> {
    return await this.clientsModel.find();
  }

  async getMemberLastActivity() {

    const clients = await this.findAll()

    for (let i = 0; i < clients.length; i++) {
      const programInfo = clients[i];

      for (let j = 0; j < programInfo.members.length; j++) {
        const memberCode = programInfo.members[j];
        console.log(memberCode);        
        const lastWorkout = await this.memberService.getMemberWorkoutSummaryLatest(memberCode)
        if (lastWorkout) {
          console.log(memberCode, lastWorkout.created);
        }     
        
        
      }
      
    }

  }

  

}
