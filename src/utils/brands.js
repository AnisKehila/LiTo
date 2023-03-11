import cars from '../data/cars.json';

export function brands() {
    const arr = []
    cars.map(car => arr.push(car.brand))
    return arr
}