import { products } from "@/assets/data/fakeProducts.js";
import { ProductCard } from "../ProductCard/ProductCard.jsx";

export function MenuBurger({ style }) {
    return (
        <>
            <nav
                className={`fixed top-[90px] z-[1] w-full bg-black/[.4] ${style} nav`}
            >
                <ul className="grid gap-[68px] bg-white px-6 pb-[35px] pt-[85px] md:grid-cols-tablet md:flex-row md:justify-center md:gap-[10px] md:px-10 md:pb-[67px] md:pt-[108px]">
                    {products.map((product, index) => {
                        return (
                            <li key={index}>
                                <ProductCard product={product} />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
