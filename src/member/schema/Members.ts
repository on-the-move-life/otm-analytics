import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MembersDocument = Member & Document;

@Schema()
export class Member {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  frequency: number;

}

export const MembersSchema = SchemaFactory.createForClass(Member);