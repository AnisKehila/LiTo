import { useParams } from "react-router-dom"
export function Car() {
    const {car} = useParams()
    return (
        <div>Car {car}</div>
    )
}
