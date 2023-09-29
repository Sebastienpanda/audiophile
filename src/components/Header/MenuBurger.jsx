import { ProductAll } from "../Products/ProductAll.jsx"

export function MenuBurger({ style }) {
    return (
        <ProductAll
            styleNav={`fixed top-[5.625rem] z-[1] w-full bg-black/[.4] ${style} nav`}
            styleUl=" bg-white px-6 pb-[2.188rem] pt-[5.313rem] md:px-10 md:pb-[4.188rem] md:pt-[6.75rem]"
        />
    )
}
