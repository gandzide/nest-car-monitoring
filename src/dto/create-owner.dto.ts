import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { GenderEnum } from '../interface/IOwner';

export class CreateOwnerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly lastName: number;

  @IsString()
  @IsNotEmpty()
  readonly gender: GenderEnum;
}
