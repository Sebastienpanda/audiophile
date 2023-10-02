import imageGestGear from "@/assets/images/shared/mobile/image-best-gear.jpg"
import imageGestGearTablet from "@/assets/images/shared/tablet/image-best-gear.jpg"
import imageGestGearDesktop from "@/assets/images/shared/desktop/image-best-gear.jpg"

export function AudioGear({ styleProduct }) {
    return (
        <>
            <section className={`mt-[7.5rem] md:mt-24 ${styleProduct}`}>
                <figure className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between ">
                    <picture className="lg:w-[49%]">
                        <source media="(min-width: 1024px )" srcSet={imageGestGearDesktop} type="image/jpeg" />
                        <source
                            media="(min-width: 768px) and (max-width: 1024px)"
                            srcSet={imageGestGearTablet}
                            type="image/jpeg"
                        />
                        <img className="w-full rounded-lg" src={imageGestGear} alt="Audio Gear" loading="lazy" />
                    </picture>
                    <figcaption className="mt-10 flex flex-col gap-8 text-center md:mt-[3.938rem] md:px-[3.875rem] lg:mt-0 lg:w-1/2 lg:pl-0 lg:pr-[6.375rem] lg:text-left">
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
