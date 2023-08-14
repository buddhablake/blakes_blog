// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import AuthorCard from "@/app/_components/AuthorCard";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
    return (
        <main className="">
            <div className="prose prose-lg p-4">
            <h1 className="mb-10">{post.title}</h1>
            {post?.mainImage ? (
                <Image
                    className="m-0 w-full mr-4 rounded-lg"
                    src={builder.image(post.mainImage).width(600).height(400).url()}
                    width={600}
                    height={400}
                    alt={post?.mainImage?.alt}
                />
            ) : null}
            {post?.body ? <PortableText value={post.body} /> : null}
            </div>
            <div className="h-8"></div>
            <AuthorCard author={post?.author} />
        </main>
    );
}