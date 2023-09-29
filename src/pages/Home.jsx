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
            <main className="mx-6 md:mx-10 lg:mx-[80px] 1xl:mx-[165px]">
                <HeroBanner />
                <ProductAll
                    styleNav="mt-[205px] md:mt-[316px] lg:mt-[358px]"
                    styleUl="lg:grid-cols-laptop lg:gap-[30px]"
                />
                <ListProducts />
                <AudioGear />
            </main>
            <Footer />
        </>
    )
}

export default App
