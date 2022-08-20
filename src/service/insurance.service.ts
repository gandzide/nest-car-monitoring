import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInsurance } from '../interface/IInsurance';
import { CreateInsuranceDto } from '../dto/create-insurance.dto';
import { UpdateInsuranceDto } from '../dto/update-insurance.dto';

@Injectable()
export class InsuranceService {
  constructor(@InjectModel('Insurance') private insuranceModel: Model<IInsurance>) {}

  async createInsurance(createInsuranceDto: CreateInsuranceDto): Promise<IInsurance> {
    const newInsurance = await new this.insuranceModel(createInsuranceDto);
    return newInsurance.save();
  }

  async updateInsurance(insuranceId: string, updateInsuranceDto: UpdateInsuranceDto): Promise<IInsurance> {
    const existingInsurance = await this.insuranceModel.findByIdAndUpdate(
      insuranceId,
      updateInsuranceDto,
      { new: true },
    );
    if (!existingInsurance) {
      throw new NotFoundException(`Insurance #${insuranceId} not found`);
    }
    return existingInsurance;
  }

  async getAllInsurances(): Promise<IInsurance[]> {
    const listInsurance = await this.insuranceModel.find();

    if (!listInsurance || !listInsurance.length) {
      throw new NotFoundException('Insurance data not found');
    }

    return listInsurance;
  }

  async getInsuranceById(insuranceId: string): Promise<IInsurance> {
    const insurance = await this.insuranceModel.findById(insuranceId);

    if (!insurance) {
      throw new NotFoundException(`Insurance #${insuranceId} not found`);
    }

    return insurance;
  }

  async deleteInsurance(insuranceId: string): Promise<boolean> {
    const insuranceToDelete = await this.insuranceModel.findByIdAndDelete(insuranceId);

    if (!insuranceToDelete) {
      throw new NotFoundException(`Insurance #${insuranceId} cannot be deleted, wrong ID`);
    }

    return true;
  }
}
