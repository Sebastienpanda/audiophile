import arrow from "@/assets/images/shared/desktop/icon-arrow-right.svg";
import { articles } from "../../assets/data/fakeArticle.js";

export function MenuBurger({ style }) {
  return (
    <>
      <nav
        className={`fixed top-[90px] w-full bg-black/[.4] z-[1] ${style} nav`}
      >
        <ul className="flex flex-col gap-[68px] bg-white px-6 pb-[35px] pt-[85px] md:flex-row md:justify-center md:gap-[10px] md:pb-[67px] md:pt-[108px] md:px-10">
          {articles.map((casque, index) => {
            return (
              <li
                key={index}
                className="bg-card rounded-lg relative flex flex-col items-center gap-[17px] pt-[88px] pb-[22px] md:px-[64px] flex-1"
              >
                <div className="absolute -top-[56px]">
                  <img
                    src={casque.link}
                    alt={casque.title}
                    width="147px"
                    loading="lazy"
                    className="w-[147px]"
                  />
                </div>
                <h2 className="text-title-nav uppercase">{casque.title}</h2>
                <div className="flex flex-row items-center gap-[13.32px]">
                  <span className="text-shop text-black/50 uppercase">
                    shop
                  </span>
                  <div>
                    <img src={arrow} alt="Icon arrow" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
