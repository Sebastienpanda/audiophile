import { AudioGear } from "../../components/AudioGear.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"
import { Header } from "../../components/Header/Header.jsx"
import { PageProductTitle } from "../../components/Header/PageTitleProduct.jsx"
import { ListCategoryProducts } from "../../components/Products/Product/ListCategoryProducts.jsx"
import { ProductAll } from "../../components/Products/ProductAll.jsx"

export function Earphones() {
    return (
        <>
            <Header style="bg-black" />
            <PageProductTitle title="earphones" />
            <main className="mx-6 md:mx-10 lg:mx-[80px] 1xl:mx-[165px]">
                <ListCategoryProducts category="earphones" />
                <ProductAll styleProduct="mt-[172px] md:mt-[172px] lg:mt-[240px]" />
                <AudioGear styleProduct="md:mt-[120px] lg:mt-[160px]" />
            </main>
            <Footer styleProduct="lg:mt-[160px]" />
        </>
    )
}
