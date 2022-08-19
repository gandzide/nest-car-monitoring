import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Car {
  @Prop()
  brand: string;
  @Prop()
  model: number;
  @Prop()
  cubicCapacity?: number;
  @Prop()
  serialNumber?: string;
  @Prop()
  type?: string;
  @Prop()
  plates?: string;
  @Prop()
  fuelType?: string;
  @Prop()
  ownerId: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
