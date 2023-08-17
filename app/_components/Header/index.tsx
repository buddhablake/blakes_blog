import Link from "next/link"
import Nav from "./Nav"
const Header = () => {
    return (
        <header className="w-full h-24 bg-gray-100 p-12">
            <div className="container mx-auto flex justify-between items-center h-full">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-gray-800">Halsey Street Collective</h1>
                    <p>Creators of Cool Shit</p>
                </Link>
               <Nav />
            </div>
        </header>
    )
}

export default Header