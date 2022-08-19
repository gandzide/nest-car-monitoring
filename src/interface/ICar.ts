import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly brand: string;
  readonly model: number;
  readonly cubicCapacity?: number;
  readonly serialNumber?: string;
  readonly type?: string;
  readonly plates?: string;
  readonly fuelType?: string;
  readonly ownerId: string;
}
