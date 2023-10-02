import { useEffect, useState } from "react"
import { instance } from "../api/instanceKy.js"

export function useKy(url, options) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [errors, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        let kyOptions = {
            signal,
            headers: {
                Accept: "application/json; charset=UTF-8",
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN_STRAPI}`,
            },
        }
        if (options) {
            kyOptions = {
                ...kyOptions,
                ...options,
            }
        }
        instance
            .get(url, kyOptions)
            .json()
            .then((data) => setData(data.data))
            .catch((e) => setError(e))
            .finally(() => setLoading(false))

        return () => {
            abortController.abort()
        }
    }, [url, options])
    return {
        data,
        loading,
        errors,
    }
}
