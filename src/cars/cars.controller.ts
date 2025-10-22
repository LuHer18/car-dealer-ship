import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/createCar.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }
  @Post()
 
  createCar(@Body() createCarDto: CreateCarDto){

    return createCarDto

  }
  @Patch(':id')
  updateCar(@Body() bodyDto: any, @Param('id', ParseIntPipe) id: number){
    return bodyDto

  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number){

    return {
      method: 'Delete',
      id
    }

  }
}
