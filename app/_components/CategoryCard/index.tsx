"use client";
import Image from 'next/image';


import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { motion } from "framer-motion";

const builder = imageUrlBuilder(client);

const CategoryCard = ({ category }: { category: SanityDocument }) => {
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }} key={category._id}>
            <Link href={`/blog/category/${category.slug.current}`}
            >
                <div className="flex flex-col gap-3" key={category._id}>
                    {category?.image ? (
                        <div className="h-[200px] relative" key={category._id}>
                            <Image
                                className="m-0 object-cover rounded-lg"
                                src={builder.image(category.image).width(800).height(800).url()}
                                fill
                                alt={category?.image?.alt}
                            />
                        </div>
                    ) : null}

                    {category?.title ? <h2 className="text-2xl text-black">{category.title}</h2> : null}

                </div>
            </Link>
        </motion.div>)
}

export default CategoryCard;