'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from "framer-motion"


const Hero = () => {
    const [name, setName] = useState({
        name: ''
    })

    const handleChange = (e: any) => {
        const { value } = e.target
        setName({ name: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.name)
        setName({ name: '' })
    }

    return (
        <section className="flex justify-start items-center p-12 h-[500px] w-full bg-slate-400 text-white text-5xl relative overflow-hidden">
            <motion.div className='flex flex-col gap-5 w-1/2'  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>
                <span>Let's get started!</span>
                <form className="flex" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name">What is your first name?</label>
                        <div className='flex'>
                            <input className="bg-transparent
      caret-white
      border-b-2
      border-white
      w-full py-2 focus:outline-none focus:shadow-outline" id="username"
                                name="name"
                                type="text"
                                autoFocus
                                value={name.name}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <button type="submit" className='animate-pulse'>-&gt;</button>
                        </div>
                    </div>
                </form>
            </motion.div>

            {/* <div className="w-[400px] h-[400px] rounded-full bg-blue-300 absolute -bottom-12 -right-12 animate-pulse">
    </div>
    <Image src="/headshot.png" width={300} height={300} alt="Blake Douglass"
    className="transform -scale-x-100 absolute bottom-0 right-0"/> */}
        </section>
    )
}
export default Hero