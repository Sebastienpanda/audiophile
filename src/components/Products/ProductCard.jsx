import arrow from "@/assets/images/shared/desktop/icon-arrow-right.svg"
import { Link } from "react-router-dom"

export function ProductCard({ product, style, link }) {
    return (
        <article className={`relative grid place-items-center rounded-lg bg-card ${style}`}>
            <div className="absolute -top-[56px]">
                <img src={product.link} alt={product.title} width="147px" loading="lazy" className="w-[147px]" />
            </div>
            <div className="flex flex-col items-center gap-[17px] pb-[22px] md:px-[62px]">
                <h2 className="pt-[88px] text-title-nav uppercase">{product.title}</h2>
                <div className="flex flex-row items-center gap-[13.32px]">
                    <span className="cursor-pointer text-shop uppercase text-black/50 transition-colors duration-[350ms] hover:text-primary">
                        <Link to={link}>shop</Link>
                    </span>
                    <div>
                        <img src={arrow} alt="Icon arrow" />
                    </div>
                </div>
            </div>
        </article>
    )
}
