"use client"

import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav"
import { motion } from "framer-motion"
const Header = () => {
    return (
        <header className="w-full bg-slate-100 h-36">
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
            className="px-12 h-full flex justify-between items-center w-screen">
                <Link href="/" className="w-full  relative h-full">
                    
                    <Image src="/Logo.png" alt="Halsey Street Collective" fill 
                    className="object-contain"/>
                
                </Link>
               {/* <Nav /> */}
            
                </motion.div>
        </header>
    )
}

export default Header