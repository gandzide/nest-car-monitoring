import { Document } from 'mongoose';

export interface IInsurance extends Document {
  readonly company: string;
  readonly personId: string;
  readonly carId: string;
  readonly paymentType: string;
  readonly price?: number;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly directPay?: boolean;
  readonly notes?: string;
}
