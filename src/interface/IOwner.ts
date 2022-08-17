import { Document } from 'mongoose';

export interface IOwner extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: GenderEnum;
}

export enum GenderEnum {
  male,
  female,
  unknown,
}
