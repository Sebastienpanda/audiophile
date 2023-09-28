export function Navigation({ styleNav, styleUl }) {
    return (
        <>
            <nav className={` ${styleNav}`}>
                <ul className={`text-link-nav uppercase text-white ${styleUl}`}>
                    <li className="transition-colors duration-[350ms] ease-in-out hover:text-primary">
                        <a href="">home</a>
                    </li>
                    <li className="transition-colors duration-[350ms] ease-in-out hover:text-primary">
                        <a href="">headphones</a>
                    </li>
                    <li className="transition-colors duration-[350ms] ease-in-out hover:text-primary">
                        <a href="">speakers</a>
                    </li>
                    <li className="transition-colors duration-[350ms] ease-in-out hover:text-primary">
                        <a href="">earphones</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
