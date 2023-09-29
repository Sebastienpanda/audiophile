const variantClasses = {
    primary: "bg-primary text-white hover:bg-hoverBtn",
}

export function Button({ content, style, variant }) {
    const variantClass = variantClasses[variant]
    return (
        <div className="flex justify-center lg:justify-start">
            <a
                className={`btn ${style} text-shop uppercase transition-colors duration-[350ms] ease-in-out ${variantClass}`}
                href="#"
            >
                {content}
            </a>
        </div>
    )
}
