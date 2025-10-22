import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.inteface';
import { randomUUID } from 'crypto';
@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: randomUUID(),
            marca: 'Toyota',
            modelo: 'Corolla'
        }
        ,
        {
            id: randomUUID(),
            marca: 'Ford',
            modelo: 'Mustang'
        },
        {
            id: randomUUID(),
            marca: 'Audi',
            modelo: 'R8'
        }
    ]

    public findAll() {
        return this.cars
    }

    public findOne(id: string) {
        const car = this.cars.find(car => car.id === id)

        if(!car)throw new NotFoundException(`El carro con el id: ${id} no se encuentra`)
        

        return car
    }

}
