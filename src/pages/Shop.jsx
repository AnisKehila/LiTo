import brands from '../data/cars'
import Card from '../components/Card'
export function Shop() {
    return (
        <div className="cards-container">
            {brands.map(brand => brand.cars.map(car => 
                <Card  key={car.name} car= {car} brand= {brand.brand}/>
            ))}
        </div>
    )
}
