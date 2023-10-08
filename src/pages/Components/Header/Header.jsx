import { useEffect, useState } from "react"
import logo from "@/assets/images/shared/desktop/logo.svg"
import iconCart from "@/assets/images/shared/desktop/icon-cart.svg"
import { Navigation } from "./Navigation.jsx"
import { MenuMobile } from "./MenuMobile.jsx"
import { Link } from "react-router-dom"
import { Panier } from "../panier/Panier.jsx"

export function Header({ style }) {
    const [active, setActive] = useState(false)
    const [panierActive, setActivePanier] = useState(false)

    useEffect(() => {
        if (active || panierActive) {
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = ""
        }
    }, [active, panierActive])
    function handclick() {
        setActive(!active)
    }
    function handlePanier() {
        setActivePanier(!panierActive)
    }
    return (
        <header className={`relative ${style}`}>
            <div className="container grid grid-cols-nav-center-mobile justify-items-center border-b-[1px] border-b-white/[0.104]   py-8 md:grid-cols-center-element-left md:justify-items-start lg:grid-cols-nav-center lg:justify-items-center lg:py-[2.188rem]">
                <div className="flex w-full justify-start lg:hidden">
                    <button onClick={handclick} className={active ? "cross active" : "cross"}>
                        <span></span>
                    </button>
                </div>
                <div className="md:ml-8 lg:ml-0">
                    <Link to="/">
                        <img src={logo} alt="Logo de Audiophile" />
                    </Link>
                </div>
                <Navigation styleNav="hidden lg:block" styleUl="flex gap-[2.12rem]" />
                <div
                    className={
                        panierActive
                            ? "panierActive flex w-full cursor-pointer justify-end"
                            : "flex w-full cursor-pointer justify-end"
                    }
                    onClick={handlePanier}
                >
                    <img src={iconCart} alt="Panier" />
                </div>
            </div>
            {active ? <MenuMobile style="visible nav-active lg:hidden" /> : <MenuMobile style="invisible" />}
            {panierActive ? <Panier style="nav-active" /> : ""}
        </header>
    )
}
