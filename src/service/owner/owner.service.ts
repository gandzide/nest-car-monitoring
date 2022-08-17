import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOwner } from '../../interface/IOwner';
import { CreateOwnerDto } from '../../dto/create-owner.dto';
import { UpdateOwnerDto } from '../../dto/update-owner.dto';

@Injectable()
export class OwnerService {
  constructor(@InjectModel('Owner') private ownerModel: Model<IOwner>) {}

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<IOwner> {
    const newOwner = await new this.ownerModel(createOwnerDto);
    return newOwner.save();
  }

  async updateOwner(
    ownerId: string,
    updateOwnerDto: UpdateOwnerDto,
  ): Promise<IOwner> {
    const existingOwner = await this.ownerModel.findByIdAndUpdate(
      ownerId,
      updateOwnerDto,
      { new: true },
    );
    if (!existingOwner) {
      throw new NotFoundException(`Owner #${ownerId} not found`);
    }
    return existingOwner;
  }

  async getAllOwners(): Promise<IOwner[]> {
    const listOwner = await this.ownerModel.find();

    if (!listOwner || !listOwner.length) {
      throw new NotFoundException('Students data not found');
    }

    return listOwner;
  }

  async getOwnerById(ownerId: string): Promise<IOwner> {
    const owner = await this.ownerModel.findById(ownerId);

    if (!owner) {
      throw new NotFoundException(`Owner #${ownerId} not found`);
    }

    return owner;
  }

  async deleteOwner(ownerId: string): Promise<boolean> {
    const ownerToDelete = await this.ownerModel.findByIdAndDelete(ownerId);

    if (!ownerToDelete) {
      throw new NotFoundException(
        `Owner #${ownerId} cannot be deleted, wrong ID`,
      );
    }

    return true;
  }
}
