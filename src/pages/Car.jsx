import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../components/CarDetails";
import brands from '../data/cars'

export function Car() {
    const { car } = useParams();
    const [currentCar, setCurrentCar] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        for (const brand of brands) {
            for (const carObj of brand.cars) {
                if (carObj.name === car) {
                    setCurrentCar(carObj);
                    setIsLoading(false);
                    return;
                }
            }
        }
        setIsLoading(false);
    }, [car]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentCar) {
        return (
            <div key="car-unavailable" className="unavailable">
                We're sorry, it looks like the brand you're searching for is currently unavailable. However, we may be able to help you find a similar product or suggest an alternative brand that meets your needs. Please don't hesitate to contact us if you have any questions or if you'd like further assistance in your search. Our customer service team is available to assist you by phone, email, or live chat. Thank you for considering our online store, and we hope to hear from you soon.
            </div>
        );
    }

    return (
        <main className="main">
            <CarDetails car={currentCar} />
        </main>
    );
}