import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { InsuranceService } from '../service/insurance.service';
import { CreateInsuranceDto } from '../dto/create-insurance.dto';
import { UpdateInsuranceDto } from '../dto/update-insurance.dto';

@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {
  }

  @Post()
  async createInsurance(@Res() response, @Body() createInsuranceDto: CreateInsuranceDto) {
    try {
      const newInsurance = await this.insuranceService.createInsurance(createInsuranceDto);
      return response.status(HttpStatus.CREATED).json(newInsurance);
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'Error: Insurance not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateInsurance(
    @Res() response,
    @Param('id') insuranceId: string,
    @Body() updateInsuranceDto: UpdateInsuranceDto,
  ) {
    try {
      const updateInsurance = await this.insuranceService.updateInsurance(insuranceId, updateInsuranceDto);
      return response.status(HttpStatus.OK).json(updateInsurance);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get()
  async getAllInsurances(@Res() response) {
    try {
      const insuranceList = await this.insuranceService.getAllInsurances();
      return response.status(HttpStatus.OK).json(insuranceList);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getInsuranceById(@Res() response, @Param('id') insuranceId: string) {
    try {
      const insurance = await this.insuranceService.getInsuranceById(insuranceId);
      return response.status(HttpStatus.OK).json(insurance);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteInsurancesById(@Res() response, @Param('id') insuranceId: string) {
    try {
      const isDeleted = await this.insuranceService.deleteInsurance(insuranceId);
      return response.status(HttpStatus.OK).json({
        message: `Insurance ${insuranceId} has been deleted`,
        isDeleted,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
