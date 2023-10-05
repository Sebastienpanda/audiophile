import { Button } from "../../../components/ui/Button.jsx"

export function ProductItem({ data, slug, category }) {
    return (
        <figure className="containerProduct lg:flex lg:items-center lg:justify-between lg:gap-[7.81rem]">
            <section>
                <picture className="block overflow-hidden rounded-lg lg:h-[35rem] lg:w-[33.75rem]">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={`${import.meta.env.VITE_BASE_ADMIN}${data.product_images.data[2].attributes.url}`}
                        type={`${data.product_images.data[2].attributes.mime}`}
                        width={data.product_images.data[2].attributes.mime}
                        height={data.product_images.data[2].attributes.mime}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet={`${import.meta.env.VITE_BASE_ADMIN}${data.product_images.data[1].attributes.url}`}
                        type={`${data.product_images.data[1].attributes.mime}`}
                        width={data.product_images.data[1].attributes.width}
                        height={data.product_images.data[1].attributes.height}
                    />
                    <img
                        srcSet={`${import.meta.env.VITE_BASE_ADMIN}${data.product_images.data[0].attributes.url}`}
                        alt={data.title}
                        width={data.product_images.data[0].attributes.width}
                        height={data.product_images.data[0].attributes.height}
                        loading="lazy"
                    />
                </picture>
            </section>

            {/* {newProduct ? <span>new product</span> : null} */}
            <figcaption className="space-y-6 pt-8 text-center md:space-y-0 md:pt-[3.25rem] lg:w-[43%] lg:pt-0 lg:text-left">
                {data.new_product && <span className="text-overline uppercase text-primary">new product</span>}
                <h2 className="text-h4 md:mx-auto md:w-1/2 md:pt-4 md:text-h2 lg:mx-0 lg:w-[56%]">{data.title}</h2>
                <p className="text-title-shop text-black/50 md:pt-8">{data.content}</p>
                <Button content="see product" variant="primary" style="mt-6 lg:mt-10" slug={`/${category}/${slug}`} />
            </figcaption>
        </figure>
    )
}
