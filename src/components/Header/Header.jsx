import { useEffect, useState } from "react";
import logo from "@/assets/images/shared/desktop/logo.svg";
import iconCart from "@/assets/images/shared/desktop/icon-cart.svg";
import { Navigation } from "./Navigation.jsx";
import { MenuBurger } from "./MenuBurger.jsx";

export function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "";
    }
  }, [active]);
  function handclick() {
    setActive(!active);
  }
  return (
    <>
      <header className="bg-mobile relative lg:bg-transparent">
        <div className="flex justify-between py-8 px-6 border-b-[1px] border-b-white/[0.104] lg:mx-[80px] lg:px-0 lg:py-[35px] 1xl:mx-[165px]">
          <button
            onClick={handclick}
            className={active ? "cross active" : "cross lg:hidden"}
          >
            <span></span>
          </button>
          <div className="md:mr-[465px] lg:mr-0">
            <img src={logo} alt="Logo de Audiophile" />
          </div>
          <Navigation />
          <div>
            <img src={iconCart} alt="Panier" />
          </div>
        </div>
        {active ? (
          <MenuBurger style="visible nav-active" />
        ) : (
          <MenuBurger style="invisible" />
        )}
      </header>
    </>
  );
}
