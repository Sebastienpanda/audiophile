import { createContext, useContext } from "react"

export const CompteurContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
})

export function useCompteur() {
    return useContext(CompteurContext)
}

export const ShopContext = createContext({
    total: 0,
    addProduct: () => {},
})

export function useShop() {
    return useContext(ShopContext)
}
