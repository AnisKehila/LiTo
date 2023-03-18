import { useParams } from "react-router-dom"
import brands from '../data/cars'
import Card from '../components/Card'
export function Brand() {
    const { brand } = useParams();
    function isAvailable() {
        let i=0;
        brands.map(item => {
            Object.values(item).includes(brand) ? i++ : i
        })
        return i;
    }
    return (
        <div className="cards-container">
            {
                brands.map((item, index) => {
                    if(item.brand == brand) {
                        return (
                            item.cars.map(car => 
                                <Card  key={car.name} car= {car} brand= {item.brand}/>
                            )
                        )
                    }
                    if(!isAvailable()) {
                        if(index < 1) {
                            return (
                                <div key="car-unavailable" className="unavailable">
                                    We're sorry, it looks like the brand you're searching for is currently unavailable. However, we may be able to help you find a similar product or suggest an alternative brand that meets your needs. Please don't hesitate to contact us if you have any questions or if you'd like further assistance in your search. Our customer service team is available to assist you by phone, email, or live chat. Thank you for considering our online store, and we hope to hear from you soon.
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}
