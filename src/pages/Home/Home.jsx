import { Footer } from "../Components/Footer/Footer.jsx"
import { Header } from "../Components/Header/Header.jsx"
import { HeroBanner } from "../Components/Header/Herobanner.jsx"
import { ListProducts } from "../Components/Product/ListProducts.jsx"
import { CategoryThumbnail } from "../Components/Product/CategoryThumbnail.jsx"
import { AudioGear } from "../Components/utils/AudioGear.jsx"

function App() {
    return (
        <>
            <Header />
            <main className="mx-6 md:mx-10 1xl:mx-[10.313rem]">
                <HeroBanner />
                <CategoryThumbnail
                    styleNav="mt-[12.813rem] md:mt-[19.75rem] lg:mt-[22.375rem]"
                    styleUl="lg:grid-cols-laptop lg:gap-[1.875rem]"
                />
                <ListProducts />
                <AudioGear />
            </main>
            <Footer />
        </>
    )
}

export default App
