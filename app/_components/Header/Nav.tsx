import Link from 'next/link'
const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-3">
                <li>
                    <Link href="/#waitlist" className='hover:underline'>
                        Join Waitlist
                    </Link>
                </li>
            </ul>
        </nav>
   
    )
}

export default Nav