import { transpose } from "../../../helpers/transpose.js"

export function Gallery({ data }) {
    const media = [data.galery_desktop, data.galery_tablet, data.galery_mobile]
    const mediaFormatted = transpose(media.map((support) => support.data))

    return (
        <div className="containerGrid grid grid-cols-1 gap-5 pt-[5.5rem] md:grid-cols-2 md:grid-rows-2 md:pt-[7.5rem] lg:gap-[1.875rem]">
            {mediaFormatted.map((media, index) => (
                <picture key={index} className="block overflow-hidden rounded-lg">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={`http://localhost:1337${media[0].attributes.url}`}
                        type={media[0].attributes.mime}
                        width={media[0].attributes.width}
                        height={media[0].attributes.height}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet={`http://localhost:1337${media[1].attributes.url}`}
                        type={media[1].attributes.mime}
                        width={media[1].attributes.width}
                        height={media[1].attributes.height}
                    />
                    <img
                        src={`http://localhost:1337${media[2].attributes.url}`}
                        alt={data.title}
                        width={media[2].attributes.width}
                        height={media[2].attributes.height}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </picture>
            ))}
        </div>
    )
}
