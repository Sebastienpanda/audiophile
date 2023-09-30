import { useEffect, useState } from "react"

export function useFetch(url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [errors, setError] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                Accept: "application/json; charset=UTF-8",
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN_STRAPI}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                console.log(data)
                setData(data.data)
            })
            .catch((e) => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return {
        data,
        loading,
        errors,
    }
}
