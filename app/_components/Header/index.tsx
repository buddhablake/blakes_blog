"use client"

import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav"
import { motion } from "framer-motion"
const Header = () => {
    return (
        <header className="w-full bg-slate-100">
            <motion.div 
            initial={
                {opacity: 0, y: 100}
            }
            whileInView={
            {opacity: 1, y: 0}
            }
            viewport={
                {once: true}
            } 
            className="px-12 h-36 flex justify-between items-center w-screen">
            <div className="container mx-auto flex justify-between items-center h-full">
               
                <Link href="/">
                    <Image src="/Logo.png" alt="Halsey Street Collective" width={400} height={50} />
                </Link>
               <Nav />
            </div>
                </motion.div>
        </header>
    )
}

export default Header