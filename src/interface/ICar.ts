import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly brand: string;
  readonly model: string;
  readonly cubicCapacity?: number;
  readonly serialNumber?: string;
  readonly type?: string;
  readonly plates?: string;
  readonly fuelType?: string;
  readonly ownerId: string;
}
