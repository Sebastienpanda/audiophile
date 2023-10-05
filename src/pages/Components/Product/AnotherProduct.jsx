import { Button } from "../../../components/ui/Button.jsx"
import { transpose } from "../../../helpers/transpose.js"

export function AnotherProduct({ data }) {
    const media = [data.another_mobile, data.another_tablet, data.another_desktop]
    // const mediaFormatted = transpose(media.map((support) => support.data))
    // const organizedMedia = mediaFormatted.map((mediaSet) => mediaSet.sort((a, b) => a.id - b.id))
    return (
        <div className="pt-[7.5rem]">
            <h2 className="text-center text-h5 uppercase leading-9 md:text-h3">you may also like</h2>
            <div className="containerAnother flex flex-col gap-14 pt-10 md:flex-row md:gap-[0.69rem] md:pt-14 lg:gap-[1.87rem] lg:pt-16">
                {media.map(
                    (media, index) => console.log(media)
                    // <div key={index}>
                    //     <figure className=" overflow-hidden rounded-lg">
                    //         <picture>
                    //             <source
                    //                 media="(min-width: 1024px)"
                    //                 srcSet={`${import.meta.env.VITE_BASE_ADMIN}${media.data[0].attributes.url}`}
                    //                 type={media.data[0].attributes.mime}
                    //                 width={media.data[0].attributes.width}
                    //                 height={media.data[0].attributes.height}
                    //             />
                    //             <source
                    //                 media="(min-width: 768px) and (max-width: 1024px)"
                    //                 srcSet={`${import.meta.env.VITE_BASE_ADMIN}${media.data[1].attributes.url}`}
                    //                 type={media.data[1].attributes.mime}
                    //                 width={media.data[1].attributes.width}
                    //                 height={media.data[1].attributes.height}
                    //             />
                    //             <img
                    //                 src={`${import.meta.env.VITE_BASE_ADMIN}${media.data[2].attributes.url}`}
                    //                 alt={data.title}
                    //                 width={media.data[2].attributes.width}
                    //                 height={media.data[2].attributes.height}
                    //                 loading="lazy"
                    //                 className="w-full"
                    //             />
                    //         </picture>
                    //     </figure>
                    //     <div className="flex flex-col items-center gap-8 pt-8 lg:pt-10">
                    //         <h3 className="text-h5 uppercase">{data.another_title[index]}</h3>
                    //         <Button
                    //             variant="primary"
                    //             content="See product"
                    //             slug={`http://localhost:5173/${data.another_slugs[index]}`}
                    //         />
                    //     </div>
                    // </div>
                )}
            </div>
        </div>
    )
}
