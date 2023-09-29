import casque from "@/assets/images/home/mobile/image-header.jpg"
import casqueTablet from "@/assets/images/home/tablet/image-header.jpg"
import casqueDesktop from "@/assets/images/home/desktop/image-hero.jpg"
import { Button } from "./ui/Button.jsx"

export function HeroBanner() {
    return (
        <>
            <section className="mt-[6.75rem] grid place-content-center md:mt-[7.875rem] lg:mt-[8rem] lg:place-content-start">
                <div className="flex flex-col items-center justify-center text-center md:mx-auto md:w-[56%] lg:mx-0 lg:w-[56%] lg:items-start lg:text-left">
                    <span className="text-overline text-white/[0.4964]">NEW PRODUCT</span>
                    <h1 className="pt-4 text-h1-mobile text-white md:pt-[1.5rem] md:text-h1 ">
                        XX99 Mark II HeadphoneS
                    </h1>
                    <p className="md:-pt-[1.5rem] pt-6 text-content text-white/75 md:text-title-shop">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>
                    <Button content="see product" variant="primary" style="mt-7 md:mt-[2.5rem]" />
                </div>
                <div className="absolute left-0 top-0 z-[-1] h-[37.5rem] w-full md:h-[45.563rem]">
                    <picture>
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={casqueTablet} />
                        <source media="(min-width: 1024px)" srcSet={casqueDesktop} />
                        <img
                            src={casque}
                            alt="Casque"
                            loading="lazy"
                            className="h-[37.5rem] w-full object-cover md:h-[45.563rem]"
                        />
                    </picture>
                </div>
            </section>
        </>
    )
}
