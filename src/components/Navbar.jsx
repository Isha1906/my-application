import { NavLink } from "react-router-dom";
import navItems from "../data/navData";
function Navbar() {
    const handleClick=()=>{
        alert("Lets Talk");
    };
    return (
        <nav
            className="bg-blue-100 fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="font-bold text-xl">
                    Nexora
                </div>
                <div className="hidden gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-slate-700"}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <button className="rounded-full w-30 bg-blue-100 px-5 py-2 
                text-black transition rounded-full px-5 py-2 hover:bg-gradient-to-r from-[#7CFF9B] via-[#28D9D1] to-[#D92BCB] transition-transform duration-500 ease-in-out" onClick={handleClick}>
                    Let's Connect
                </button>
            </div>

        </nav>
    );
};

export default Navbar