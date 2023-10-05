import { Gallery } from "./Gallery.jsx"
import { AnotherProduct } from "./AnotherProduct.jsx"
import { SingleItem } from "./SingleItem.jsx"
import { Features } from "./Features.jsx"

export function SingleProduct({ data }) {
    return (
        <>
            <SingleItem data={data} />
            <section>
                <Features data={data} />
                <section>
                    <Gallery data={data} />
                </section>
                {/* <section>
                    <AnotherProduct data={data} />
                </section> */}
            </section>
        </>
    )
}
