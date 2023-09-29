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
            <main className="mx-6 md:mx-10 lg:mx-20 1xl:mx-[10.313rem]">
                <ListCategoryProducts category="earphones" />
                <ProductAll styleProduct="mt-[10.75rem] md:mt-[10.75rem] lg:mt-60" />
                <AudioGear styleProduct="md:mt-[7.5rem] lg:mt-40" />
            </main>
            <Footer styleProduct="lg:mt-40" />
        </>
    )
}
