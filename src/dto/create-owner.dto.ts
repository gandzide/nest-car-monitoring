import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
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

  @IsNumber()
  @IsNotEmpty()
  readonly gender: GenderEnum;
}
