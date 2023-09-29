import { AudioGear } from "../components/AudioGear.jsx"
import { Footer } from "../components/Footer/Footer.jsx"
import { Header } from "../components/Header/Header.jsx"
import { HeroBanner } from "../components/Herobanner.jsx"
import { ProductAll } from "../components/Products/ProductAll.jsx"
import { ListProducts } from "../components/Products/ListProducts.jsx"

function App() {
    return (
        <>
            <Header />
            <main className="mx-6 md:mx-10 lg:mx-20 1xl:mx-[10.313rem]">
                <HeroBanner />
                <ProductAll
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
