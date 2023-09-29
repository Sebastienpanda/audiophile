import { items } from "@/assets/data/fakeItems.js"
import { ProductItem } from "./ProductItem.jsx"

export function ListCategoryProducts({ category }) {
    return (
        <section className="mt-16 lg:mt-[160px]">
            <div className="space-y-[120px] lg:space-y-[160px]">
                {items
                    .filter((item) => item.category === category)
                    .map((element, index) => (
                        <ProductItem key={index} {...element} />
                    ))}
            </div>
        </section>
    )
}
