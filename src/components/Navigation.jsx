import arrow from "@/assets/images/shared/desktop/icon-arrow-right.svg";

export function Navigation({ style }) {
  const casques = [
    {
      link: "../src/assets/images/shared/desktop/image-category-thumbnail-headphones.png",
      title: "headphones",
    },
    {
      link: "../src/assets/images/shared/desktop/image-category-thumbnail-speakers.png",
      title: "headphones",
    },
    {
      link: "../src/assets/images/shared/desktop/image-category-thumbnail-earphones.png",
      title: "headphones",
    },
  ];
  return (
    <>
      <nav className={`absolute top-[90px] w-full bg-black/[.4] ${style}`}>
        <ul className="flex flex-col gap-[68px] bg-white px-6 pb-8 pt-[84px] h-[750px]">
          {casques.map((casque, index) => {
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
        </ul>
      </nav>
    </>
  );
}
