import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="fixed top-6 w-4/6 max-w-[600px] bg-white px-4 py-2 rounded-full flex justify-evenly shadow-xl">
            <Link className="text-sm transition-all hover:text-blue-500" href="/">Home</Link>
            <Link className="text-sm transition-all hover:text-blue-500" href="/aboutme">Sobre mi</Link>
            <Link className="text-sm transition-all hover:text-blue-500" href="/contact">Contactar</Link>
        </nav>
    );
}
