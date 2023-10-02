import { Link } from "react-router-dom"
import { Submit } from "../../../components/ui/Forms/Submit.jsx"
import { InputNumber } from "../../../components/ui/Forms/InputNumber.jsx"

export function SingleItem({ data }) {
    return (
        <>
            <span className="block pt-4 text-title-shop text-black/50 md:pt-8 lg:pt-[4.94rem]">
                <Link to="/">Go back</Link>
            </span>
            <div className="md:flex md:items-center md:gap-[4.34rem] md:pt-6 lg:pt-14">
                <figure className="pt-6 md:pt-0">
                    <picture className="block overflow-hidden rounded-lg">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={`http://localhost:1337${data.product_desktop.data.attributes.url}`}
                            type={data.product_desktop.data.attributes.mime}
                            width={data.product_desktop.data.attributes.width}
                            height={data.product_desktop.data.attributes.height}
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1024px)"
                            srcSet={`http://localhost:1337${data.product_tablet.data.attributes.url}`}
                            type={data.product_tablet.data.attributes.mime}
                            width={data.product_tablet.data.attributes.width}
                            height={data.product_tablet.data.attributes.height}
                        />
                        <img
                            src={`http://localhost:1337${data.product_mobile.data.attributes.url}`}
                            alt={data.title}
                            width={data.product_mobile.data.attributes.width}
                            height={data.product_mobile.data.attributes.height}
                            loading="lazy"
                            className="w-full"
                        />
                    </picture>
                </figure>
                <section className="md:w-[95%] lg:w-[88%]">
                    <div className="flex flex-col gap-6 pt-8 md:gap-0">
                        {data.newProduct && <span className="text-overline uppercase text-primary">new product</span>}
                        <h1 className="text-h4 uppercase md:pt-[1.06rem] md:leading-8 lg:text-h2"> {data.title} </h1>
                        <p className="text-title-shop text-black/50 md:pt-8"> {data.content} </p>
                        <span className="text-h6 md:pt-8">$ {data.price}</span>
                    </div>

                    <form className="flex gap-4  pt-[1.94rem] lg:pt-[2.94rem]">
                        <div className="h-12 w-[7.5rem]">
                            <InputNumber iconLeft="-" iconRight="+" value="0" />
                        </div>
                        <Submit content="Add to cart" />
                    </form>
                </section>
            </div>
        </>
    )
}
