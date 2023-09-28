import imageGestGear from "@/assets/images/shared/mobile/image-best-gear.jpg"
import imageGestGearTablet from "@/assets/images/shared/tablet/image-best-gear.jpg"
import imageGestGearDesktop from "@/assets/images/shared/desktop/image-best-gear.jpg"

export function AudioGear() {
    return (
        <>
            <section className="mt-[120px] md:mt-[96px]">
                <figure className="1xl:flex 1xl:flex-row-reverse 1xl:items-center 1xl:justify-between ">
                    <picture className="1xl:w-[49%]">
                        <source media="(min-width: 1024px )" srcSet={imageGestGearDesktop} type="image/jpeg" />
                        <source
                            media="(min-width: 768px) and (max-width: 1024px)"
                            srcSet={imageGestGearTablet}
                            type="image/jpeg"
                        />
                        <img className="w-full rounded-lg" src={imageGestGear} alt="Audio Gear" loading="lazy" />
                    </picture>
                    <figcaption className="mt-10 flex flex-col gap-8 text-center md:mt-[63px] md:px-[62px] 1xl:mt-0 1xl:w-1/2 1xl:pl-0 1xl:pr-[102px] 1xl:text-left">
                        <h2 className="text-h4 uppercase md:text-h2">
                            Bringing you the <span className="text-primary">best</span> audio gear
                        </h2>
                        <p className="text-title-shop text-black/50">
                            Located at the heart of New York City, Audiophile is the premier store for high end
                            headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
                            demonstration rooms available for you to browse and experience a wide range of our products.
                            Stop by our store to meet some of the fantastic people who make Audiophile the best place to
                            buy your portable audio equipment.
                        </p>
                    </figcaption>
                </figure>
            </section>
        </>
    )
}
