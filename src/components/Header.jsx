import audiophile from "../../public/assets/images/logo/audiophile.svg";
import shop from "../../public/assets/images/icons/shop.svg";
import { useState } from "react";

export function Header() {
  const [active, setActive] = useState(false);

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
          <div>
            <img src={audiophile} alt="Logo de Audiophile" />
          </div>
          <div>
            <img src={shop} alt="Panier" />
          </div>
        </div>
      </header>
    </>
  );
}
