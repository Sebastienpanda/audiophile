export function Features({ data }) {
    return (
        <div className="lg:flex lg:justify-between lg:gap-[7.81rem] lg:pt-40">
            <section className="pt-[5.5rem] md:pt-[7.5rem] lg:w-[59%] lg:pt-0">
                <h2 className="text-h5 uppercase md:text-h3">Features</h2>
                <p className="pt-6 text-title-shop text-black/50 md:pt-8">{data.features[0]}</p>
                <p className="pt-9 text-title-shop text-black/50">{data.features[1]}</p>
            </section>
            <section className="pt-[5.5rem] lg:w-[21.875rem] lg:pt-0">
                <div className="md:flex md:max-w-[34.3125rem] md:justify-between lg:flex-col">
                    <h2 className="pb-6 text-h5 uppercase md:pb-0 md:text-h3">In the box</h2>
                    <ul className="flex flex-col gap-2 lg:pt-8">
                        {data.box.map((item, index) => (
                            <li className="flex flex-row gap-6" key={index}>
                                <span className="text-title-shop font-bold text-primary">{item.quantity}</span>
                                <span className="text-title-shop text-black/50">{item.item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
