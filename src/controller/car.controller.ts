import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CarService } from '../service/car.service';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async createCar(@Res() response, @Body() createCarDto: CreateCarDto) {
    try {
      const newCar = await this.carService.createCar(createCarDto);
      return response.status(HttpStatus.CREATED).json(newCar);
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'Error: Car not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateCar(
    @Res() response,
    @Param('id') carId: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    try {
      const updateCar = await this.carService.updateCar(carId, updateCarDto);
      return response.status(HttpStatus.OK).json(updateCar);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get()
  async getAllCars(@Res() response) {
    try {
      const carList = await this.carService.getAllCars();
      return response.status(HttpStatus.OK).json(carList);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getCarById(@Res() response, @Param('id') carId: string) {
    try {
      const car = await this.carService.getCarById(carId);
      return response.status(HttpStatus.OK).json(car);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteCarsById(@Res() response, @Param('id') carId: string) {
    try {
      const isDeleted = await this.carService.deleteCar(carId);
      return response.status(HttpStatus.OK).json({
        message: `Car ${carId} has been deleted`,
        isDeleted,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
