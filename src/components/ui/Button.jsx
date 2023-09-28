export function Button({ content, style }) {
    return (
        <a className={`btn ${style} text-shop uppercase`} href="#">
            {content}
        </a>
    )
}
