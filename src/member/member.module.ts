import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MembersSchema } from './schema/Members';
import { WorkoutSummaryModule } from 'src/workout-summary/workout-summary.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Member.name,schema:MembersSchema}]),
    WorkoutSummaryModule
  ],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
