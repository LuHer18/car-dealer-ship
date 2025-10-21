import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return {
      cars: [
        'Toyota',
        'Ford',
        'Chevrolet',
        'Honda',
        'Nissan',
        'Hyundai',
        'Kia',
        'Mazda',
      ],
    };
  }
}
