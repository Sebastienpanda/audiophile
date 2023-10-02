import { useParams } from "react-router-dom"
import { SingleProduct } from "../Components/Product/SingleProduct.jsx"
import { CategoryThumbnail } from "../Components/Product/CategoryThumbnail.jsx"
import { Header } from "../Components/Header/Header.jsx"
import { Footer } from "../Components/Footer/Footer.jsx"
import { AudioGear } from "../Components/utils/AudioGear.jsx"
import { useKy } from "../../hooks/useKy.js"

export function Single() {
    const { id } = useParams()
    const { data, loading } = useKy(`headphones/${id}?populate=*`)
    console.log(data)

    return (
        <>
            <Header style="bg-black" />
            <main className="mx-6 md:mx-10 lg:mx-20 1xl:mx-[10.313rem]">
                {loading && <div>Chargement</div>}
                {data.attributes && <SingleProduct data={data.attributes} />}
                <CategoryThumbnail styleProduct="mt-[10.75rem] md:mt-[10.75rem] lg:mt-60" />
                <AudioGear styleProduct="md:mt-[7.5rem] lg:mt-40" />
            </main>
            <Footer />
        </>
    )
}
