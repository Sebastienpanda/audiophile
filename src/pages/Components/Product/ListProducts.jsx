import imageSpeaker from "@/assets/images/home/mobile/image-speaker-zx9.png"
import imageSpeakerTablet from "@/assets/images/home/tablet/image-speaker-zx9.png"
import imageSpeakerDesktop from "@/assets/images/home/desktop/image-speaker-zx9.png"
import imagespeakerzx7 from "@/assets/images/home/mobile/image-speaker-zx7.jpg"
import imagespeakerzx7Tablet from "@/assets/images/home/tablet/image-speaker-zx7.jpg"
import imagespeakerzx7Desktop from "@/assets/images/home/desktop/image-speaker-zx7.jpg"
import imageearphonesyx1 from "@/assets/images/home/mobile/image-earphones-yx1.jpg"
import imageearphonesyx1Tablet from "@/assets/images/home/tablet/image-earphones-yx1.jpg"
import imageearphonesyx1Desktop from "@/assets/images/home/desktop/image-earphones-yx1.jpg"
import { Button } from "../../../components/ui/Button.jsx"

export function ListProducts() {
    return (
        <section>
            <div className="mt-[7.5rem] flex flex-col gap-6 md:mt-24 md:gap-8 lg:mt-[10.5rem] lg:gap-12">
                <div className="pattern lg:h-[35rem ] flex flex-col items-center gap-8 rounded-lg bg-primary px-6 py-[3.438rem] md:px-[10.688rem] lg:relative lg:flex-row lg:justify-end lg:overflow-hidden lg:pr-[5.688rem]">
                    <picture className="block w-[10.75rem] md:w-[12.313rem] lg:absolute lg:bottom-[-1.188rem] lg:left-[7.313rem] lg:w-[25.625rem]">
                        <source media="(min-width: 1024px)" srcSet={imageSpeakerDesktop} type="image/png" />
                        <source
                            media="(min-width: 768px) and (max-width: 1024px)"
                            srcSet={imageSpeakerTablet}
                            type="image/png"
                        />
                        <img
                            className="w-full lg:h-[493px]"
                            src={imageSpeaker}
                            alt="image-speaker-zx9"
                            loading="lazy"
                        />
                    </picture>
                    <div className="text-center text-white md:flex md:flex-col md:gap-8 lg:w-[40%] lg:gap-0 lg:text-left">
                        <div className="flex flex-col gap-6 md:gap-8 lg:gap-6">
                            <h2 className="text-h1-mobile uppercase md:text-h1">zx9 speaker</h2>
                            <p
                                className="text-title-shop text-white/75
                                "
                            >
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                                sound.
                            </p>
                        </div>

                        <div className="flex justify-center pt-10 md:pt-0 lg:justify-start lg:pt-10">
                            <Button content="see product" style="bg-black hover:bg-hover-btn" />
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <picture>
                        <source media="(min-width:1024px)" srcSet={imagespeakerzx7Desktop} type="image/jpeg" />
                        <source
                            media="(min-width:768px) and (max-width:1024px)"
                            srcSet={imagespeakerzx7Tablet}
                            type="image/jpeg"
                        />
                        <img className="w-full" src={imagespeakerzx7} alt="image-speaker-zx9" loading="lazy" />
                    </picture>
                    <div className="absolute left-6 top-1/2 flex -translate-y-1/2 flex-col gap-8 lg:left-[5.938rem]">
                        <h2 className="text-h4 uppercase">zx7 speaker</h2>
                        <Button
                            content="see product"
                            style="hover:text-white hover:bg-black border-[1px] border-black"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:gap-[0.688rem] lg:gap-[1.875rem]">
                    <div className="overflow-hidden rounded-lg md:w-1/2">
                        <picture>
                            <source media="(min-width:1024px)" srcSet={imageearphonesyx1Desktop} type="image/jpeg" />
                            <source
                                media="(min-width:768px) and (max-width:1024px)"
                                srcSet={imageearphonesyx1Tablet}
                                type="image/jpeg"
                            />
                            <img className="w-full" src={imageearphonesyx1} alt="image-speaker-zx9" loading="lazy" />
                        </picture>
                    </div>
                    <div className="flex flex-col gap-8 rounded-lg bg-card  py-[2.563rem] pl-6 md:w-1/2 md:justify-center md:py-0 md:pl-[2.563rem] lg:pl-[5.938rem]">
                        <h2 className="text-h4 uppercase">yx1 earphones</h2>
                        <Button
                            content="see product"
                            style="hover:text-white hover:bg-black border-[1px] border-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
