

const Nav = ()=>{
    return(          

        <div className="py-5">
            <h1 className="text-center text-4xl font-bold">Travel Explorer</h1>
            <nav className="text-center">
                <ul className="list-none">
                    <li className="max-sm:text-xl inline mx-4"><a className="decoration-0" href="#destinations">Destinations</a></li>
                    <li className="max-sm:text-xl inline mx-4"><a className="decoration-0" href="#about">About Us</a></li>
                    <li className="max-sm:text-xl inline mx-4"><a className="decoration-0" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

    )
}
export default Nav;