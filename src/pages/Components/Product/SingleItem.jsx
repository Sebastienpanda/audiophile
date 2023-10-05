import { useNavigate } from "react-router-dom"
import { Submit } from "../../../components/ui/Forms/Submit.jsx"
import { InputNumber } from "../../../components/ui/Forms/InputNumber.jsx"

export function SingleItem({ data }) {
    const navigate = useNavigate()

    return (
        <>
            <span className="block pt-4 text-title-shop text-black/50 md:pt-8 lg:pt-[4.94rem]">
                <button onClick={() => navigate(-1)}>Go back</button>
            </span>
            <div className="md:flex md:items-center md:gap-[4.34rem] md:pt-6 lg:pt-14">
                <figure className="pt-6 md:pt-0">
                    <picture className="block overflow-hidden rounded-lg">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={`${import.meta.env.VITE_BASE_ADMIN}${data.single_product.data[2].attributes.url}`}
                            type={data.single_product.data[2].attributes.mime}
                            width={data.single_product.data[2].attributes.width}
                            height={data.single_product.data[2].attributes.height}
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1024px)"
                            srcSet={`${import.meta.env.VITE_BASE_ADMIN}${data.single_product.data[1].attributes.url}`}
                            type={data.single_product.data[1].attributes.mime}
                            width={data.single_product.data[1].attributes.width}
                            height={data.single_product.data[1].attributes.height}
                        />
                        <img
                            src={`${import.meta.env.VITE_BASE_ADMIN}${data.single_product.data[0].attributes.url}`}
                            alt={data.title}
                            width={data.single_product.data[0].attributes.width}
                            height={data.single_product.data[0].attributes.height}
                            loading="lazy"
                            className="w-full"
                        />
                    </picture>
                </figure>
                <section className="md:w-[95%] lg:w-[88%]">
                    <div className="flex flex-col gap-6 pt-8 md:gap-0">
                        {data.new_product && <span className="text-overline uppercase text-primary">new product</span>}
                        <h1 className="text-h4 uppercase md:pt-[1.06rem] md:leading-8 lg:text-h2"> {data.title} </h1>
                        <p className="text-title-shop text-black/50 md:pt-8"> {data.content} </p>
                        {/* <span className="text-h6 md:pt-8">$ {data.price}</span> */}
                    </div>

                    <form className="flex gap-4  pt-[1.94rem] lg:pt-[2.94rem]">
                        <InputNumber iconLeft="-" iconRight="+" value="0" style="w-[7.5rem] h-12" />
                        <Submit content="Add to cart" />
                    </form>
                </section>
            </div>
        </>
    )
}
