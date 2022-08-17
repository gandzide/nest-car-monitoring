import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { GenderEnum } from '../interface/IOwner';

@Schema()
export class Owner {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  gender: GenderEnum;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
