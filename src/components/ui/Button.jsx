import { Link } from "react-router-dom"

const variantClasses = {
    primary: "bg-primary text-white hover:bg-hoverBtn",
}

export function Button({ content, style, variant, slug, onclick }) {
    const variantClass = variantClasses[variant]
    return (
        <div className="flex justify-center lg:justify-start">
            <Link
                to={slug}
                className={`btn ${style} text-shop uppercase transition-colors duration-[350ms] ease-in-out ${variantClass}`}
                onClick={onclick}
            >
                {content}
            </Link>
        </div>
    )
}
