import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { OwnerService } from '../../service/owner/owner.service';
import { CreateOwnerDto } from '../../dto/create-owner.dto';
import { UpdateOwnerDto } from '../../dto/update-owner.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  async createOwner(@Res() response, @Body() createOwnerDto: CreateOwnerDto) {
    try {
      const newOwner = await this.ownerService.createOwner(createOwnerDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Owner has been created successfully',
        newOwner,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'Error: Owner not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateOwner(
    @Res() response,
    @Param('id') ownerId: string,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ) {
    try {
      const updateOwner = await this.ownerService.updateOwner(
        ownerId,
        updateOwnerDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Owner has been updated successfully',
        updateOwner,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get()
  async getAllOwners(@Res() response) {
    try {
      const ownerList = await this.ownerService.getAllOwners();
      return response.status(HttpStatus.OK).json(ownerList);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getOwnerById(@Res() response, @Param('id') ownerId: string) {
    try {
      const owner = await this.ownerService.getOwnerById(ownerId);
      return response.status(HttpStatus.OK).json({ owner });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteOwnersById(@Res() response, @Param('id') ownerId: string) {
    try {
      const isDeleted = await this.ownerService.deleteOwner(ownerId);
      return response.status(HttpStatus.OK).json({
        message: `Owner ${ownerId} has been deleted`,
        isDeleted,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
