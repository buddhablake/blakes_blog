// ./nextjs-app/app/_components/Post.tsx

"use client";

import { SanityDocument } from "@sanity/client";

import CategoryCard from "@/app/_components/CategoryCard";



const Categories = ({ categories = [] }: { categories: SanityDocument [] }) => {
    console.log(categories)
    return (
        <div className="mt-12">
            <h2 className="text-2xl text-black">Categories</h2>
            <div className="h-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-12">
        {categories.map((category) => (
            <CategoryCard category={category} key={category._id} />
                ))}
        </div>
        </div>
    );
}

export default Categories;