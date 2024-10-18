import Link from "next/link"
import NavLink from "./NavLink"

export default function Header() {
    return (
        <header className="bg-white/50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <h2 className="text-2xl text-gray-500 py-6">Our Cool Project</h2>
                <nav>
                <ul className="flex gap-x-7 text-gray-500 text-sm">
                    <li>
                        <NavLink text="Home" path="/"/>
                    </li>
                    <li>
                        <NavLink text="About" path="/about-us"/>
                    </li>
                    <li>
                        <NavLink text="Our Team" path="/our-team"/>
                    </li>
                </ul>
                </nav> 
            </div>
        </header>
    )
}