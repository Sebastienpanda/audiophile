import { Header } from "./components/Header/Header.jsx";
import { HeroBanner } from "./components/Herobanner.jsx";
import { Products } from "./components/Products/Products.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="mx-6 md:mx-10 lg:mx-[80px] 1xl:mx-[165px]">
                <HeroBanner />
                <Products />
            </main>
        </>
    );
}

export default App;
