import { useFetch } from "../../../hooks/useFetch.js"
import { ProductItem } from "./ProductItem.jsx"

export function ListCategoryProducts({ category }) {
    const { data, loading } = useFetch("http://localhost:1337/api/headphones?populate=*")
    return (
        <section className="mt-16 lg:mt-40">
            <div className="space-y-[7.5rem] lg:space-y-40">
                {loading && <div>Chargement</div>}
                {data &&
                    data
                        .filter((item) => item.attributes.category.data.attributes.category === category)
                        .map((element) => <ProductItem key={element.id} data={element.attributes} id={element.id} />)}
            </div>
        </section>
    )
}
