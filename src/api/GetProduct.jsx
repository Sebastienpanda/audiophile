import { useFetch } from "../hooks/useFetch.js"

export function GetProduct() {
    const { data, loading } = useFetch("http://localhost:1337/api/headphones?populate=*")

    return (
        <>
            {loading && <section>Chargement</section>}
            {data && (
                <section>
                    {data.map((element) => (
                        <picture key={element.id}>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={`http://localhost:1337${element.attributes.thumbnail_desktop.data.attributes.url}`}
                                type={`${element.attributes.thumbnail_desktop.data.attributes.mime}`}
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1024px)"
                                srcSet={`http://localhost:1337${element.attributes.thumbnail_tablet.data.attributes.url}`}
                                type={`${element.attributes.thumbnail_desktop.data.attributes.mime}`}
                            />
                            <img
                                src={`http://localhost:1337${element.attributes.thumbnail_mobile.data.attributes.url}`}
                                alt={element.attributes.title}
                                loading="lazy"
                            />
                        </picture>
                    ))}
                    coucou les gens
                </section>
            )}
        </>
    )
}
