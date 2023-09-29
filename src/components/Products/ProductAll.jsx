import { products } from "@/assets/data/fakeProducts.js"
import { ProductCard } from "./ProductCard.jsx"

export function ProductAll({ styleNav, styleUl, styleProduct }) {
    return (
        <nav className={`${styleNav} ${styleProduct}`}>
            <ul
                className={`md grid gap-[4.25rem] md:grid-cols-tablet md:flex-row md:justify-center md:gap-2.5 ${styleUl}`}
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
