import { products } from "@/assets/data/fakeProducts.js"
import { ProductCard } from "./ProductCard.jsx"

export function ProductAll({ styleNav, styleUl }) {
    return (
        <nav className={`${styleNav}`}>
            <ul
                className={`md grid gap-[68px] md:grid-cols-tablet md:flex-row md:justify-center md:gap-[10px] ${styleUl}`}
            >
                {products.map((product, index) => {
                    return (
                        <li key={index}>
                            <ProductCard product={product} link={product.page} />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
