import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WorkoutSummaryDocument = WorkoutSummary & Document;

@Schema({collection:'workoutSummary'})
export class WorkoutSummary {
    @Prop()
    title: string;

    @Prop()
    name: string;
}

export const WorkoutSummarySchema = SchemaFactory.createForClass(WorkoutSummary);