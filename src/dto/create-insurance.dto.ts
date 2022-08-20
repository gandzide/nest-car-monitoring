import { IsBoolean, IsNotEmpty, IsNumber, IsString, Length, MaxLength, MinLength } from 'class-validator';

export class CreateInsuranceDto {
  @IsString()
  @MaxLength(30)
  @MinLength(2)
  @IsNotEmpty()
  readonly company: string;

  @IsString()
  @IsNotEmpty()
  @Length(24)
  readonly personId: string;

  @IsString()
  @IsNotEmpty()
  @Length(24)
  readonly carId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @MinLength(2)
  readonly paymentType: string;

  @IsNumber()
  readonly price?: number;

  @IsString()
  @IsNotEmpty()
  readonly startDate?: string;

  @IsString()
  @IsNotEmpty()
  readonly endDate?: string;

  @IsBoolean()
  readonly directPay?: boolean;

  @IsString()
  @MaxLength(1000)
  readonly notes?: string;
}
