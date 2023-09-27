import { products } from "@/assets/data/fakeProducts.js";
import { ProductCard } from "../ProductCard/ProductCard.jsx";

export function Products() {
    return (
        <>
            <section className="mt-[205px] md:mt-[316px] 1xl:mt-[358px]">
                <div className="grid gap-[68px] md:grid-cols-tablet md:flex-row md:justify-center md:gap-[10px] lg:grid-cols-laptop lg:gap-[30px]">
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                    })}
                </div>
            </section>
        </>
    );
}
