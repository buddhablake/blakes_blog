// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

const Categories = ({ categories = [] }: { categories: SanityDocument [] }) => {
    console.log(categories)
    return (
        <div className="mt-12">
            <h2 className="text-2xl text-black">Categories</h2>
            <div className="h-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-12">
        {categories.map((category) => (
            <Link href={`/blog/category/${category.slug.current}`} key={category._id}
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
                ))}
        </div>
        </div>
    );
}

export default Categories;