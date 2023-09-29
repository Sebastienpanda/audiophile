import { items } from "@/assets/data/fakeItems.js"
import { ProductItem } from "./ProductItem.jsx"

export function ListCategoryProducts({ category }) {
    return (
        <section className="mt-16 lg:mt-40">
            <div className="space-y-[7.5rem] lg:space-y-40">
                {items
                    .filter((item) => item.category === category)
                    .map((element, index) => (
                        <ProductItem key={index} {...element} />
                    ))}
            </div>
        </section>
    )
}
