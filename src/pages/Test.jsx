import { useContext, useState } from "react"
import { CompteurContext, useCompteur } from "../hooks/usePanier.jsx"
import { UserContext } from "../hooks/userContext.jsx"

export function Test() {
    const [value, setValue] = useState(0)

    let { increment, decrement } = useCompteur()

    increment = () => {
        setValue(value + 1)
    }

    decrement = () => {
        setValue(value - 1)
    }
    return (
        // <CompteurContext.Provider
        //     value={{
        //         count: value,
        //         increment: () => setValue(value + 1),
        //         decrement: () => setValue(value - 1),
        //     }}
        // >
        //     <section>
        //         <div onClick={increment}>+</div>
        //         <EnfantParent />
        //         <div onClick={decrement}>-</div>
        //     </section>
        //     <EnfantDeParent />
        //     <User />
        // </CompteurContext.Provider>
        <User />
    )
}

function EnfantParent() {
    const { count } = useCompteur()
    return <section>{count}</section>
}

function EnfantDeParent() {
    const { count } = useCompteur()
    return <section>{count}</section>
}

function User() {
    const user = useContext(UserContext)

    if (user?.login?.username) {
        return <p>You are logged in as {user?.login.username}</p>
    } else {
        return <p>You are not logged in</p>
    }
}
