import { useParams } from "react-router-dom"
export function Brand() {
    const { brand } = useParams();
    return (
        <>  
        <div>Brand {brand}</div>
        </>
    )
}
