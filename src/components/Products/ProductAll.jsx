import { ProductThumbnail } from "./ProductThumbnail.jsx"
import { useFetch } from "../../hooks/useFetch.js"

export function ProductAll({ styleNav, styleUl, styleProduct }) {
    const { data } = useFetch("http://localhost:1337/api/category-thumbnails?populate=*")

    return (
        <nav className={`${styleNav} ${styleProduct}`}>
            <ul
                className={`md grid gap-[4.25rem] md:grid-cols-tablet md:flex-row md:justify-center md:gap-2.5 ${styleUl}`}
            >
                {data.map((product) => {
                    return (
                        <li key={product.id}>
                            <ProductThumbnail product={product.attributes} link={`/${product.attributes.title}`} />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
