import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutSummaryDto } from './create-workout-summary.dto';

export class UpdateWorkoutSummaryDto extends PartialType(CreateWorkoutSummaryDto) {}
