import { Button } from "../ui/Button.jsx"

export function Skeleton() {
    return (
        <figure className="containerProduct shadow lg:flex lg:items-center lg:justify-between lg:gap-[7.81rem]">
            <div className="animate-pulse ">
                <section className="bg-blue-400">
                    <picture className="block overflow-hidden rounded-lg lg:h-[35rem] lg:w-[33.75rem]"></picture>
                </section>
                <figcaption className=" space-y-6 pt-8 text-center md:space-y-0 md:pt-[3.25rem] lg:w-[43%] lg:pt-0 lg:text-left">
                    <span className="h-2 bg-slate-700 text-overline uppercase text-primary"></span>
                    <h2 className="h-2 bg-slate-700 text-h4 md:mx-auto md:w-1/2 md:pt-4 md:text-h2 lg:mx-0 lg:w-[56%]"></h2>
                    <p className="h-2 bg-slate-700 text-title-shop text-black/50 md:pt-8"></p>
                    <Button style="mt-6 lg:mt-10 bg-slate-700" />
                </figcaption>
            </div>
        </figure>
    )
}
