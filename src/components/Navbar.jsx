import { NavLink } from "react-router-dom";
import navItems from "../data/navData";
import { useState } from "react";
import ContactForm from "./ContactForm";

function Navbar() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full bg-blue-100">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    <div className="text-xl font-bold">
                        Nexora
                    </div>

                    <div className="hidden gap-8 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-bold text-blue-600"
                                        : "text-slate-700"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <button
                        className="rounded-full bg-blue-100 px-5 py-2 text-black transition-transform duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#7CFF9B] hover:via-[#28D9D1] hover:to-[#D92BCB]"
                        onClick={() => setIsFormOpen(true)}
                    >
                        Let's Connect
                    </button>

                </div>
            </nav>

            {isFormOpen && (
                <ContactForm onClose={() => setIsFormOpen(false)} />
            )}
        </>
    );
}

export default Navbar;