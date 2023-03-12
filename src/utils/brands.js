import cars from '../data/cars';

export function brands() {
    const arr = []
    cars.map(car => arr.push(car.brand))
    return arr
}