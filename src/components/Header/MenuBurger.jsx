import { ProductAll } from "../Products/ProductAll.jsx"

export function MenuBurger({ style }) {
    return (
        <ProductAll
            styleNav={`fixed top-[90px] z-[1] w-full bg-black/[.4] ${style} nav`}
            styleUl=" bg-white px-6 pb-[35px] pt-[85px] md:px-10 md:pb-[67px] md:pt-[108px]"
        />
    )
}
