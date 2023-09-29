import { Button } from "../../ui/Button.jsx"

export function ProductItem({ thumbnail, title, description, newProduct }) {
    return (
        <section className="containerProduct lg:flex lg:items-center lg:justify-between lg:gap-[110px] ">
            <div className="lg:w-1/2">
                <picture className="block overflow-hidden rounded-lg">
                    <source media="(min-width: 1024px)" srcSet={thumbnail.desktop} type="image/jpeg" />
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet={thumbnail.tablet}
                        type="image/jpeg"
                    />
                    <img src={thumbnail.mobile} alt={title} loading="lazy" />
                </picture>
            </div>

            {/* {newProduct ? <span>new product</span> : null} */}
            <div className="space-y-6 pt-8 text-center md:space-y-0 md:pt-[52px] lg:w-[43%] lg:pt-0 lg:text-left">
                {newProduct && <span className="text-overline uppercase text-primary">new product</span>}
                <h2 className="text-h4 md:mx-auto md:w-1/2 md:pt-4 md:text-h2 lg:mx-0 lg:w-[56%]">{title}</h2>
                <p className="text-title-shop text-black/50 md:pt-8">{description}</p>
                <Button content="see product" variant="primary" style="mt-6 lg:mt-10" />
            </div>
        </section>
    )
}
