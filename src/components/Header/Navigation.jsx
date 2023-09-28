export function Navigation({ style }) {
    return (
        <>
            <nav className={`hidden lg:block ${style}`}>
                <ul className={`flex gap-[2.12rem] text-link-nav uppercase text-white ${style}`}>
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
