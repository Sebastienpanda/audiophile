import { Link } from "react-router-dom"
import { Submit } from "../../ui/Forms/Submit.jsx"
import { useState } from "react"
import { Gallery } from "../../Gallery.jsx"
import { AnotherProduct } from "../../AnotherProduct.jsx"

export function SingleProduct({ data }) {
    const [number, setNumber] = useState(0)

    const increment = (e) => {
        e.preventDefault()
        setNumber(number + 1)
    }

    const decrement = (e) => {
        e.preventDefault()
        setNumber(number - 1)
    }
    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    return (
        <>
            <section>
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
                            {data.newProduct && (
                                <span className="text-overline uppercase text-primary">new product</span>
                            )}
                            <h1 className="text-h4 uppercase md:pt-[1.06rem] md:leading-8 lg:text-h2">
                                {" "}
                                {data.title}{" "}
                            </h1>
                            <p className="text-title-shop text-black/50 md:pt-8"> {data.content} </p>
                            <span className="text-h6 md:pt-8">$ {data.price}</span>
                        </div>

                        <form className="flex gap-4  pt-[1.94rem] lg:pt-[2.94rem]">
                            <div className="h-12 w-[7.5rem]">
                                <div className="flex h-full flex-row bg-card">
                                    <button
                                        className="w-10 cursor-pointer rounded-l text-shop text-black/25
                                     transition-colors duration-[350ms] ease-in-out hover:text-primary"
                                        onClick={decrement}
                                        disabled={number === 0}
                                    >
                                        <span className="m-auto">−</span>
                                    </button>
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        value={number}
                                        onChange={handleChange}
                                        className="w-10 bg-card text-center text-shop outline-none"
                                        readOnly
                                    />
                                    <button
                                        className="w-10 cursor-pointer text-shop text-black/25
                                transition-colors duration-[350ms] ease-in-out hover:text-primary"
                                        onClick={increment}
                                    >
                                        <span className="m-auto">+</span>
                                    </button>
                                </div>
                            </div>

                            <Submit content="Add to cart" />
                        </form>
                    </section>
                </div>

                <div className="lg:flex lg:justify-between lg:gap-[7.81rem] lg:pt-40">
                    <section className="pt-[5.5rem] md:pt-[7.5rem] lg:w-[59%] lg:pt-0">
                        <h2 className="text-h5 uppercase md:text-h3">Features</h2>
                        <p className="pt-6 text-title-shop text-black/50 md:pt-8">{data.first_content}</p>
                        <p className="pt-9 text-title-shop text-black/50">{data.second_content}</p>
                    </section>
                    <section className="pt-[5.5rem] lg:w-[21.875rem] lg:pt-0">
                        <div className="md:flex md:max-w-[34.3125rem] md:justify-between lg:flex-col">
                            <h2 className="pb-6 text-h5 uppercase md:pb-0 md:text-h3">In the box</h2>
                            <ul className="flex flex-col gap-2 lg:pt-8">
                                {Object.keys(data.box).map((key, index) => (
                                    <li className="flex flex-row gap-6" key={index}>
                                        <span className="text-title-shop font-bold text-primary">{data.box[key]}</span>
                                        <span className="text-title-shop text-black/50">{key}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
                <section>
                    <Gallery data={data} />
                </section>
                <section>
                    <AnotherProduct data={data} />
                </section>
            </section>
        </>
    )
}
