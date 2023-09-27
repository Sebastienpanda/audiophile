import { articles } from "../assets/data/fakeArticle.js";
import arrow from "@/assets/images/shared/desktop/icon-arrow-right.svg";

export function Articles() {
  return (
    <>
      <section className="mt-[205px]">
        <div className="flex flex-col gap-[68px] bg-white px-6 pb-8">
          {articles.map((casque, index) => {
            return (
              <li
                key={index}
                className="bg-card rounded-lg relative flex flex-col items-center gap-[17px] pt-[88px] pb-[22px]"
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
                <h2 className="text-title-shop uppercase">{casque.title}</h2>
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
        </div>
      </section>
    </>
  );
}
