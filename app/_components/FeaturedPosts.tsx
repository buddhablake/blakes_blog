// ./nextjs-app/app/_components/Posts.tsx
import type { SanityDocument } from "@sanity/client";
import PostCard from "@/app/_components/PostCard";


export default function FeaturedPosts({ posts = [] }: { posts: SanityDocument[] }) {
    return (
        <div>
            <div className="h-8"></div>
            <h2 className="text-2xl text-black">Featured Posts</h2>
            <div className="h-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-12">
                {posts.map((post, index) => (
                  <PostCard post={post} index={index} key={post._id} />
                ))}
            </div>
        </div>
    );
}