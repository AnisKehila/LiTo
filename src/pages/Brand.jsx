import { useParams } from "react-router-dom"
export function Brand() {
    let { brand } = useParams();
    return (
        <div>Brand {brand}</div>
    )
}
