import { useParams } from "react-router-dom"
import { OneProduct } from "../../components/Products/Product/OneProduct.jsx"

export function OneHeadphone() {
    const { id } = useParams()
    return <OneProduct category="headphones" id={parseInt(id)} />
}
