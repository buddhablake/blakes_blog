'use client'

import { motion } from "framer-motion"
import WaitListForm from "@/app/_components/WaitlistForm";

const ComingSoon = () => {
    return (
        <section className="flex w-full bg-slate-100 text-white text-5xl h-screen">
            <motion.div className="flex flex-col justify-center items-center container mx-auto px-12 text-slate-500 gap-6" initial={
                {opacity: 0, y: 100}
            }
            whileInView={
                {opacity: 1, y: 0}
            }
            viewport={{ once: true }}
            >
              

                <h2 className="text-6xl">For the love of local</h2>

            <h3 className="text-2xl">
                We are not quite ready but fill out the form below to join our waitlist
            </h3>
            <div className="h-12"></div>
            <WaitListForm />

            </motion.div>
        
        </section>
    );
    }

export default ComingSoon;