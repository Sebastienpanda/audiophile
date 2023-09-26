import casque from "@/assets/images/home/mobile/image-header.jpg";

export function HeroBanner() {
  return (
    <>
      <div className="px-6 mt-[108px]">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-overline text-white/[0.4964]">NEW PRODUCT</span>
          <h1 className="text-h1-mobile text-white pt-4">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-content text-white/75 pt-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="#" className="btn btn-primary mt-7">
            See Product
          </a>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-[-1]">
          <img src={casque} alt="Casque" loading="lazy" />
        </div>
      </div>
    </>
  );
}
