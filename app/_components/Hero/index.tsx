'use client'
import { motion } from "framer-motion"


const Hero = () => {


    return (
        <section className="flex w-full h-[calc(100vh-9rem)] bg-slate-100 text-white text-5xl">
            <motion.div className="flex justify-center items-center w-full text-slate-500" initial={
                {opacity: 0, y: 100}
            }
            whileInView={
                {opacity: 1, y: 0}
            }
            viewport={{ once: true }}
            >
                <div className="flex flex-col gap-4 justify-center items-center text-center">

                <h2 className="text-6xl">For the love of local</h2>
            {/* make an h3 that says "We're not quite ready but fill out the form below to join our waitlist" making sure to escape characters when needed  */}

            <h3 className="text-2xl">
                We are not quite ready but fill out the form below to join our waitlist
            </h3>
                </div>
            </motion.div>
        
        </section>
    )
}
export default Hero