export function Gallery({ data }) {
    return (
        <div className="containerGrid grid grid-cols-1 gap-5 pt-[5.5rem] md:grid-cols-2 md:grid-rows-2 md:pt-[7.5rem] lg:gap-[1.875rem]">
            {data.gallery.map(({ desktop, tablet, mobile }, index) => (
                <picture key={index} className="block overflow-hidden rounded-lg">
                    <source media="(min-width: 1024px)" srcSet={`${import.meta.env.VITE_BASE_ADMIN}${desktop}`} />
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet={`${import.meta.env.VITE_BASE_ADMIN}${tablet}`}
                    />
                    <img
                        src={`${import.meta.env.VITE_BASE_ADMIN}${mobile}`}
                        alt={data.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </picture>
            ))}
        </div>
    )
}
