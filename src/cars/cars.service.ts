import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            marca: 'Toyota',
            modelo: 'Corolla'
        }
        ,
        {
            id: 2,
            marca: 'Ford',
            modelo: 'Mustang'
        },
        {
            id:3,
            marca: 'Audi',
            modelo: 'R8'
        }
    ]

    public findAll() {
        return this.cars
    }

    public findOne(id: number) {
        const car = this.cars.find(car => car.id === id)

        if(!car)throw new NotFoundException(`El carro con el id: ${id} no se encuentra`)
        

        return car
    }

}
