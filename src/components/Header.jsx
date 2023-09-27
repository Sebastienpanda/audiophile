import { useEffect, useState } from "react";
import logo from "@/assets/images/shared/desktop/logo.svg";
import iconCart from "@/assets/images/shared/desktop/icon-cart.svg";
import { Navigation } from "./Navigation.jsx";

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
      <header className="bg-mobile relative">
        <div className="flex justify-between py-8 px-6 border-b-[1px] border-b-white/[0.104]">
          <button
            onClick={handclick}
            className={active ? "cross active" : "cross"}
          >
            <span></span>
          </button>
          <div className="md:mr-[465px]">
            <img src={logo} alt="Logo de Audiophile" />
          </div>
          <div>
            <img src={iconCart} alt="Panier" />
          </div>
        </div>
        {active ? (
          <Navigation style="visible nav-active" />
        ) : (
          <Navigation style="invisible" />
        )}
      </header>
    </>
  );
}
