import { Header } from "../Components/Header/Header.jsx"
import { Footer } from "../Components/Footer/Footer.jsx"
import { HeroBannerTitle } from "../Components/Header/HeroBannerTitle.jsx"
import { CategoryThumbnail } from "../Components/Product/CategoryThumbnail.jsx"
import { ListCategoryProducts } from "../Components/Product/ListCategoryProducts.jsx"
import { AudioGear } from "../Components/utils/AudioGear.jsx"

export function HeadPhones() {
    return (
        <>
            <Header style="bg-black" />
            <HeroBannerTitle title="headphones" />
            <main className="mx-6 md:mx-10 lg:mx-20 1xl:mx-[10.313rem]">
                <ListCategoryProducts category="headphones" />
                <CategoryThumbnail styleProduct="mt-[10.75rem] md:mt-[10.75rem] lg:mt-60" />
                <AudioGear styleProduct="md:mt-[7.5rem] lg:mt-40" />
            </main>
            <Footer styleProduct="lg:mt-40" />
        </>
    )
}
