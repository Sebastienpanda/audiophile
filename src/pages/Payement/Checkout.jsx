import { Header } from "../Components/Header/Header.jsx"
import { Footer } from "../Components/Footer/Footer.jsx"
import { CheckoutContent } from "./CheckoutContent.jsx"

export function Checkout() {
    return (
        <>
            <Header style="bg-black" />
            <main className="mx-6 md:mx-10 1xl:mx-[10.313rem]">
                <CheckoutContent />
            </main>
            <Footer />
        </>
    )
}
