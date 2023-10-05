import { useKy } from "../../../hooks/useKy.js"
import { ProductItem } from "./ProductItem.jsx"

export function ListCategoryProducts({ category }) {
    const { data, loading } = useKy("products?populate=*")
    return (
        <section className="mt-16 lg:mt-40">
            <div className="space-y-[7.5rem] lg:space-y-40">
                {loading && <div>Chargement</div>}
                {data &&
                    data
                        .filter((element) => element.attributes.category.data.attributes.slug === category)
                        .map((element) => (
                            <ProductItem
                                key={element.id}
                                data={element.attributes}
                                slug={element.attributes.slug}
                                category={element.attributes.category.data.attributes.slug}
                            />
                        ))}
            </div>
        </section>
    )
}
