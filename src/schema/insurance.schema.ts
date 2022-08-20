import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Insurance {
  @Prop()
   company: string;
  @Prop()
   personId: string;
  @Prop()
   carId: string;
  @Prop()
   paymentType: string;
  @Prop()
   price?: number;
  @Prop()
   startDate?: string;
  @Prop()
   endDate?: string;
  @Prop()
   directPay?: boolean;
  @Prop()
   notes?: string;
}

export const InsuranceSchema = SchemaFactory.createForClass(Insurance);
