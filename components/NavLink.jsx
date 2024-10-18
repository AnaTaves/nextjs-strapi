"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({text, path}) { 
    const pathname = usePathname()
    const active = pathname === path

    return (
        <Link className={active ? "opacity-100" : "opacity-50 hover:opacity-65"} href={path}>
            {text}
        </Link>
    )
}