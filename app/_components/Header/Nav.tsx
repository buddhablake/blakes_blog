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
                    <Link href="/blog" className='hover:underline'>
                        Work
                    </Link>
                    </li>
                    <li>
                    <Link href="/fuck-you" className='hover:underline'>
                        Fuck you
                    </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Nav