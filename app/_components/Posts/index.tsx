// ./nextjs-app/app/_components/Posts.tsx
'use client';

import type { SanityDocument } from "@sanity/client";
import PostCard from "@/app/_components/PostCard";
import { motion } from "framer-motion";


export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
    console.log("posts:" ,posts)
    return (
    
        <div>
            <div className="h-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-12">
                {posts.map((post, index) => (
                   <PostCard post={post} index={index} key={post._id} />
                ))}
            </div>
        </div>
    );
}