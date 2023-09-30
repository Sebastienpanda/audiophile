import { Button } from "../../ui/Button.jsx"

export function ProductItem({ id, title, content, newProduct, mobile, tablet, desktop }) {
    return (
        <figure className="containerProduct lg:flex lg:items-center lg:justify-between lg:gap-[7.81rem]">
            <section>
                <picture className="block overflow-hidden rounded-lg lg:h-[35rem] lg:w-[33.75rem]">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={`http://localhost:1337${desktop.data.attributes.url}`}
                        type={`${desktop.data.attributes.mime}`}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet={`http://localhost:1337${tablet.data.attributes.url}`}
                        type={`${tablet.data.attributes.mime}`}
                    />
                    <img srcSet={`http://localhost:1337${mobile.data.attributes.url}`} alt={title} loading="lazy" />
                </picture>
            </section>

            {/* {newProduct ? <span>new product</span> : null} */}
            <figcaption className="space-y-6 pt-8 text-center md:space-y-0 md:pt-[3.25rem] lg:w-[43%] lg:pt-0 lg:text-left">
                {newProduct && <span className="text-overline uppercase text-primary">new product</span>}
                <h2 className="text-h4 md:mx-auto md:w-1/2 md:pt-4 md:text-h2 lg:mx-0 lg:w-[56%]">{title}</h2>
                <p className="text-title-shop text-black/50 md:pt-8">{content}</p>
                <Button content="see product" variant="primary" style="mt-6 lg:mt-10" slug={`/headphones/${id}`} />
            </figcaption>
        </figure>
    )
}
