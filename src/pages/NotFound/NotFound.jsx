import { useRouteError } from "react-router-dom"

export function NotFound() {
    const error = useRouteError()
    console.log(error)
    context.error = 404
    return <section>Oops une erreur est survenue</section>
}
