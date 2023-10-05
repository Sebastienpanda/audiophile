import arrow from "@/assets/images/shared/desktop/icon-arrow-right.svg"
import { Link } from "react-router-dom"

export function Thumbnail({ product, style }) {
    return (
        <article className={`relative grid place-items-center rounded-lg bg-card ${style}`}>
            <div className="absolute -top-14">
                <img
                    src={`${import.meta.env.VITE_BASE_ADMIN}${product.thumbnail.data.attributes.url}`}
                    alt={product.title}
                    width={product.thumbnail.data.attributes.width}
                    height={product.thumbnail.data.attributes.height}
                    loading="lazy"
                    className="w-[9.188rem]"
                />
            </div>
            <div className="flex flex-col items-center gap-[1.063rem] pb-[1.375rem] md:px-[3.875rem]">
                <h2 className="pt-[5.5rem] text-title-nav uppercase">{product.title}</h2>
                <div className="flex flex-row items-center gap-[0.833rem]">
                    <span className="cursor-pointer text-shop uppercase text-black/50 transition-colors duration-[350ms] hover:text-primary">
                        <Link to={`/${product.slug}`}>shop</Link>
                    </span>
                    <div>
                        <img src={arrow} alt="Icon arrow" />
                    </div>
                </div>
            </div>
        </article>
    )
}
