// ./nextjs-app/app/_components/Posts.tsx

import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

    return (
        <main className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center">
            {posts.map((post) => (
                <div className="w-[300px] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
                key={post._id}>
                    <Link
                        href={post.slug.current}
                        className=""
                    >
                        {post?.mainImage ? (
                            <div className="h-[200px] w-[300px] overflow-hidden">
                            <Image
                                className="hover:scale-110 transition-all duration-300 ease-in-out"
                                src={builder.image(post.mainImage).width(300).height(200).url()}
                                width={300}
                                height={200}
                                alt={post?.mainImage?.alt}
                            />
                            </div>
                        ) : null}
                        <div className="p-4 flex flex-col gap-3">
                            <h2>{post.title}</h2>
                            <div className="flex items-center gap-3">
                                {post?.author?.image ? (
                                    <Image
                                        className="rounded-full m-0"
                                        src={builder.image(post.author.image).width(45).height(45).url()}
                                        width={45}
                                        height={45}
                                        alt={post?.author?.image?.alt}
                                    />
                                ) : null}
                                <div className="flex flex-col">
                                    {post?.author?.name ? <h2 className="m-0 text-base font-bold">{post.author.name}</h2> : null}
                                    {post?.publishedAt ? <p className=" m-0 text-base">{new Date(post.publishedAt).toLocaleDateString()}</p> : null}
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            ))}
        </main>
    );
}