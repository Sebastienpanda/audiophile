import headphonesTwo from "@/assets/images/cart/image-xx99-mark-two-headphones.jpg"
import headphones59 from "@/assets/images/cart/image-xx59-headphones.jpg"
import earphones from "@/assets/images/cart/image-yx1-earphones.jpg"
import { InputNumber } from "../../../components/ui/Forms/InputNumber.jsx"
import { Button } from "../../../components/ui/Button.jsx"

export function Panier({ style }) {
    const product = [
        {
            name: "XX99 MK II",
            price: "2,999",
            thumbnail: headphonesTwo,
        },
        {
            name: "XX59",
            price: "899",
            thumbnail: headphones59,
        },
        {
            name: "YX1",
            price: "599",
            thumbnail: earphones,
        },
    ]
    return (
        <section className={`absolute top-[5.625rem] z-[1] w-full bg-black/50 px-6 ${style}`}>
            <div className="absolute mt-6 h-[30.5rem] w-[20.4375rem] rounded-lg bg-white px-[1.75rem] md:right-10 md:w-[23.5625rem] lg:right-20 1xl:right-[10.61rem]">
                <div className="flex flex-row justify-between pt-8">
                    <h1 className="text-h6 uppercase">cart ({product.length})</h1>
                    <p className="text-title-shop text-black/50 underline">Remove all</p>
                </div>
                <div className="flex flex-col gap-6 pt-[1.94rem]">
                    {product.map((item, index) => (
                        <div key={index} className="flex flex-row items-center justify-between gap-[1.19rem] ">
                            <div className="flex flex-row items-center gap-4">
                                <div className="h-16 w-16 overflow-hidden rounded-lg">
                                    <img src={item.thumbnail} alt="" className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h2 className="text-[0.813rem] text-title-nav uppercase leading-[1.5625rem]">
                                        {item.name}
                                    </h2>
                                    <span className="text-overline-shop text-black/50">$ {item.price}</span>
                                </div>
                            </div>
                            <InputNumber
                                iconLeft="-"
                                iconRight="+"
                                value="0"
                                width="6"
                                height="2"
                                style="w-24 h-8"
                                id={`number-${index}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between pt-8">
                    <h1 className="text-title-shop uppercase text-black/50">total</h1>
                    <p className="text-h6 uppercase tracking-normal ">$ 5,396</p>
                </div>
                <Button variant="primary" content="checkout" style="w-full mt-6" slug="/checkout" />
            </div>
        </section>
    )
}
