import casque from "@/assets/images/home/mobile/image-header.jpg";
import casqueTablet from "@/assets/images/home/tablet/image-header.jpg";

export function HeroBanner() {
  return (
    <>
      <section className="mt-[108px] grid place-content-center md:mt-[126px]">
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-[195px]">
          <span className="text-overline text-white/[0.4964]">NEW PRODUCT</span>
          <h1 className="text-h1-mobile text-white pt-4 md:text-h1 md:pt-[1.5rem] ">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-content text-white/75 pt-6 md:text-title-shop md:-pt-[1.5rem]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="#" className="btn btn-primary mt-7 md:mt-[2.5rem]">
            See Product
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full z-[-1] h-[600px]">
          <picture>
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              srcSet={casqueTablet}
            />
            <img
              src={casque}
              alt="Casque"
              loading="lazy"
              className="h-[600px] object-cover w-full md:h-[729px]"
            />
          </picture>
        </div>
      </section>
    </>
  );
}
