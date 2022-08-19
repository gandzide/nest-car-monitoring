import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MaxLength(30)
  @MinLength(2)
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @MinLength(2)
  readonly model: number;

  @IsNumber()
  @Min(500)
  @Max(9000)
  readonly cubicCapacity?: number;

  @IsString()
  readonly serialNumber?: string;

  @IsString()
  @MaxLength(15)
  @MinLength(2)
  readonly type?: string;

  @IsString()
  @MaxLength(10)
  @MinLength(2)
  readonly plates?: string;

  @IsString()
  @MaxLength(10)
  @MinLength(2)
  readonly fuelType?: string;

  @IsDate()
  @IsNotEmpty()
  readonly ownerId: string;
}
