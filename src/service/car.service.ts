import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICar } from '../interface/ICar';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private carModel: Model<ICar>) {}

  async createCar(createCarDto: CreateCarDto): Promise<ICar> {
    const newCar = await new this.carModel(createCarDto);
    return newCar.save();
  }

  async updateCar(carId: string, updateCarDto: UpdateCarDto): Promise<ICar> {
    const existingCar = await this.carModel.findByIdAndUpdate(
      carId,
      updateCarDto,
      { new: true },
    );
    if (!existingCar) {
      throw new NotFoundException(`Car #${carId} not found`);
    }
    return existingCar;
  }

  async getAllCars(): Promise<ICar[]> {
    const listCar = await this.carModel.find();

    if (!listCar || !listCar.length) {
      throw new NotFoundException('Car data not found');
    }

    return listCar;
  }

  async getCarById(carId: string): Promise<ICar> {
    const car = await this.carModel.findById(carId);

    if (!car) {
      throw new NotFoundException(`Car #${carId} not found`);
    }

    return car;
  }

  async deleteCar(carId: string): Promise<boolean> {
    const carToDelete = await this.carModel.findByIdAndDelete(carId);

    if (!carToDelete) {
      throw new NotFoundException(`Car #${carId} cannot be deleted, wrong ID`);
    }

    return true;
  }
}
