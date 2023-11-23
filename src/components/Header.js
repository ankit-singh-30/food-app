
const Header = () => {
    return (
        <header className="fixed w-full pl-5 pr-5 bg-white shadow-lg">
            {/* <div className=""> */}
            <div className="relative m-auto flex items-center h-20 max-w-[1200px] min-w-[1200px]">
                <img className="w-9 h-12 cursor-pointer" src="https://cdnlogo.com/logos/s/4/swiggy.svg" alt="logo" />

                <ul className="flex-1 flex flex-row-reverse items-center">
                    <li className="first:mr-0 cursor-pointer mr-14">Cart</li>

                    <li className="cursor-pointer mr-14">Sign In</li>
                    <li className="cursor-pointer mr-14">Help</li>
                    <li className="cursor-pointer mr-14">Offers</li>
                    <li className="cursor-pointer mr-14">Search</li>
                </ul>
            </div>
            {/* </div> */}
        </header>
    );
}

export default Header;