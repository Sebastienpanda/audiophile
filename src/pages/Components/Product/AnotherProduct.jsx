import { Button } from "../../../components/ui/Button.jsx"

export function AnotherProduct({ data }) {
    return (
        <div className="pt-[7.5rem]">
            <h2 className="text-center text-h5 uppercase leading-9 md:text-h3">you may also like</h2>
            <div className="containerAnother flex flex-col gap-14 pt-10 md:flex-row md:gap-[0.69rem] md:pt-14 lg:gap-[1.87rem] lg:pt-16">
                {data.other_product.data.attributes.others.map(({ slug, name, image }, index) => (
                    <div key={index}>
                        <figure className=" overflow-hidden rounded-lg">
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={`${import.meta.env.VITE_BASE_ADMIN}${image.desktop}`}
                                />
                                <source
                                    media="(min-width: 768px) and (max-width: 1024px)"
                                    srcSet={`${import.meta.env.VITE_BASE_ADMIN}${image.tablet}`}
                                />
                                <img
                                    src={`${import.meta.env.VITE_BASE_ADMIN}${image.mobile}`}
                                    alt={name}
                                    loading="lazy"
                                    className="w-full"
                                />
                            </picture>
                        </figure>
                        <div className="flex flex-col items-center gap-8 pt-8 lg:pt-10">
                            <h3 className="text-h5 uppercase">{name}</h3>
                            <Button
                                variant="primary"
                                content="See product"
                                slug={`http://localhost:5173/${slug}`}
                                onclick={window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
