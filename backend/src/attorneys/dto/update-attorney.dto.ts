import { PartialType } from '@nestjs/mapped-types';
import { CreateAttorneyDto } from './create-attorney.dto';

export class UpdateAttorneyDto extends PartialType(CreateAttorneyDto) {}
