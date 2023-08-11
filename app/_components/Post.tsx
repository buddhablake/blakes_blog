// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
    return (
        <main className="container mx-auto prose prose-lg p-4">
            <h1 className="mb-10">{post.title}</h1>
            <div className="flex items-center gap-3 mb-10">
                {post?.author?.image ? (
                    <Image
                        className="rounded-full m-0"
                        src={builder.image(post.author.image).width(60).height(60).url()}
                        width={60}
                        height={60}
                        alt={post?.author?.image?.alt}
                    />
                ) : null}
                <div className="flex flex-col">
                    {post?.author?.name ? <h2 className="m-0 text-2xl">{post.author.name}</h2> : null}
                    {post?.publishedAt ? <p className=" text-gray-500 m-0 text-base">{new Date(post.publishedAt).toLocaleDateString()}</p> : null}
                </div>
            </div>
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
        </main>
    );
}