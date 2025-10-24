import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.inteface';
import { randomUUID } from 'crypto';
import { CreateCarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: randomUUID(),
        //     marca: 'Toyota',
        //     modelo: 'Corolla'
        // }
        // ,
    ]

    public findAll() {
        return this.cars
    }

    public findOne(id: string) {
        const car = this.cars.find(car => car.id === id)

        if(!car)throw new NotFoundException(`El carro con el id: ${id} no se encuentra`)
        

        return car
    }
    public create(createCarDto: CreateCarDto){
        const car = {
            id: randomUUID(),
            marca: createCarDto.marca,
            modelo: createCarDto.modelo
        }
        this.cars.push(car)

        return car;
    }
    public update(id: string, updateCarDto: UpdateCarDto){
        let carDb =  this.findOne(id);
        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDb = { ...carDb, ...updateCarDto, id}
                return carDb
            }
            return car;
        })
        return carDb
    }
    public delete(id: string){
        this.findOne(id);
        
        this.cars = this.cars.filter(car => car.id !== id);
        
        return "Se ha eliminado el carro";
    }
    fillCarWithSeedData(cars: Car[]){
        this.cars = cars;
    }

}
