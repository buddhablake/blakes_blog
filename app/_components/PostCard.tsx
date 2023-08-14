import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";


const builder = imageUrlBuilder(client);
const PostCard = ({ post, index }: { post: SanityDocument, index: any }) => {
    return (
        <div key={post._id} className={`h-[400px] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-end text-white relative ${index % 5 === 0 ? 'col-span-1 md:col-span-2' : ''} ${(index === 1 || index === 2) ? 'row-span-1' : ''} ${index % 5 === 3 || index % 5 === 4 ? 'row-span-1' : ''}`}
            style={{
                background: `url(${builder.image(post.mainImage).width(800).height(800).url()})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="p-4 flex flex-col gap-3">
                <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-xl hover:underline">{post.title}</h2>
                </Link>
                <Link href={`/blog/author/${post?.author?.slug?.current}`}>
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
                            {post?.author?.name ? <h2 className="m-0 text-base font-bold hover:underline">{post.author.name}</h2> : null}
                            {post?.publishedAt ? <p className=" m-0 text-base">{new Date(post.publishedAt).toLocaleDateString()}</p> : null}
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}
export default PostCard;