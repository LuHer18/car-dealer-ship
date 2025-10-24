import { randomUUID } from "crypto";
import { Car } from "src/cars/interfaces/car.inteface";

export const CARS_SEED: Car[] = [
    {
        id: randomUUID(),
        marca: 'Toyota',
        modelo: 'Corolla'
    },
    {
        id: randomUUID(),
        marca: 'Honda',
        modelo: 'Civic'
    },
    {
        id: randomUUID(),
        marca: 'Mazda',
        modelo: 'CX30'
       },



]