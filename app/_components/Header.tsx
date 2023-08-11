import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full h-24 bg-gray-100 mb-6 p-12">
     <div className="container mx-auto flex justify-between items-center h-full">
         
{/* make the name a link */}

<Link href="/">
        <h1 className="text-3xl font-bold text-gray-800">Pints of Joy</h1>
</Link>
        <p className="text-lg text-gray-600">A blog about beer and joy</p>
            </div>
        </header>
    )
    }

export default Header