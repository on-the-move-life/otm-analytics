import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClientsDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  programme: string;

  @Prop()
  members: string[];

}

export const ClientsSchema = SchemaFactory.createForClass(Client);