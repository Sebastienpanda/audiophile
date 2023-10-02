import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch.js"
import { SingleProduct } from "../../components/Products/Product/SingleProduct.jsx"
import { Header } from "../../components/Header/Header.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"
import { AudioGear } from "../../components/AudioGear.jsx"
import { ProductAll } from "../../components/Products/ProductAll.jsx"

export function Single() {
    const { id } = useParams()
    const { data, loading } = useFetch(`http://localhost:1337/api/headphones/${id}?populate=*`)
    console.log(data)

    return (
        <>
            <Header style="bg-black" />
            <main className="mx-6 md:mx-10 lg:mx-20 1xl:mx-[10.313rem]">
                {loading && <div>Chargement</div>}
                {data.attributes && <SingleProduct data={data.attributes} />}
                <ProductAll styleProduct="mt-[10.75rem] md:mt-[10.75rem] lg:mt-60" />
                <AudioGear styleProduct="md:mt-[7.5rem] lg:mt-40" />
            </main>
            <Footer />
        </>
    )
}
