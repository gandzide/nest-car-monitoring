import { Document } from 'mongoose';

export interface IOwner extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: GenderEnum;
  readonly cnp: string;
  readonly birthDate: string;
}

export enum GenderEnum {
  M = 'Male',
  F = 'Female',
  NA = 'Rather not say',
}
