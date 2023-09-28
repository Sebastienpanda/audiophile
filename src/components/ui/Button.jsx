export function Button({ content, style }) {
    return (
        <a className={`btn ${style} text-shop uppercase transition-colors duration-[350ms] ease-in-out`} href="#">
            {content}
        </a>
    )
}
