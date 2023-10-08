import headphonesTwo from "@/assets/images/cart/image-xx99-mark-two-headphones.jpg"
import headphones59 from "@/assets/images/cart/image-xx59-headphones.jpg"
import earphones from "@/assets/images/cart/image-yx1-earphones.jpg"
import { Button } from "../../../components/ui/Button.jsx"

export function Summary() {
    const product = [
        {
            name: "XX99 MK II",
            price: "2,999",
            thumbnail: headphonesTwo,
            quantity: "x1",
        },
        {
            name: "XX59",
            price: "899",
            thumbnail: headphones59,
            quantity: "x2",
        },
        {
            name: "YX1",
            price: "599",
            thumbnail: earphones,
            quantity: "x1",
        },
    ]
    return (
        <section className="h-[38.25rem] lg:w-[21.875rem]">
            <div className=" rounded-lg bg-white px-6 py-8">
                <h2 className="text-h6">Summary</h2>
                <div className="flex flex-col gap-6 pt-[1.94rem]">
                    {product.map((item, index) => (
                        <div key={index} className="flex flex-row items-center justify-between gap-6 ">
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
                            <div>
                                <span>x1</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-[0.5rem] pt-8">
                    <div className="flex justify-between">
                        <h3 className="text-title-shop uppercase text-black/50">Total</h3>
                        <span className="text-summary-total uppercase">$ 5,396</span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-title-shop uppercase text-black/50">SHIPPING</h3>
                        <span className="text-summary-total uppercase">$ 50</span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-title-shop uppercase text-black/50">VAT (INCLUDED)</h3>
                        <span className="text-summary-total uppercase">$ 1,079</span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-title-shop uppercase text-black/50">GRAND TOTAL</h3>
                        <span className="text-summary-total uppercase text-primary">$ 5,446</span>
                    </div>
                </div>
                <Button variant="primary" content="CONTINUE & PAY" style="w-full mt-8" />
            </div>
        </section>
    )
}
