import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-3">
                <li>
                    <Link href="/blog" className='hover:underline'>
                        Blog
                    </Link>
                    </li>
                    <li>
                    <Link href="/work" className='hover:underline'>
                        Work
                    </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Nav