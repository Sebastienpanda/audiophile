import { useEffect, useState } from "react"
import logo from "@/assets/images/shared/desktop/logo.svg"
import iconCart from "@/assets/images/shared/desktop/icon-cart.svg"
import { Navigation } from "./Navigation.jsx"
import { MenuBurger } from "./MenuBurger.jsx"

export function Header() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = ""
        }
    }, [active])
    function handclick() {
        setActive(!active)
    }
    return (
        <>
            <header className="relative bg-mobile lg:bg-transparent">
                <div className="grid-cols-nav-center-mobile grid justify-items-center border-b-[1px] border-b-white/[0.104] px-6 py-8 md:mx-10 md:grid-cols-center-element-left md:justify-items-start md:px-0 lg:mx-[80px] lg:grid-cols-nav-center lg:justify-items-center lg:px-0 lg:py-[35px] 1xl:mx-[165px]">
                    <div className="flex w-full justify-start lg:hidden">
                        <button onClick={handclick} className={active ? "cross active" : "cross"}>
                            <span></span>
                        </button>
                    </div>
                    <div className="md:ml-[32px] lg:ml-0">
                        <img src={logo} alt="Logo de Audiophile" />
                    </div>
                    <Navigation />
                    <div className="flex w-full justify-end">
                        <img src={iconCart} alt="Panier" />
                    </div>
                </div>
                {active ? <MenuBurger style="visible nav-active lg:hidden" /> : <MenuBurger style="invisible" />}
            </header>
        </>
    )
}
