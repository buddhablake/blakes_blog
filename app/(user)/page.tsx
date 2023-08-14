import FeaturedPosts from "@/app/_components/FeaturedPosts"

import { getCachedClient } from "@/sanity/lib/getClient";
import { featuredPostsQuery } from "@/sanity/lib/queries";

const homePage = async () => {
    const featuredPosts = await getCachedClient()(featuredPostsQuery);
    return (
        <FeaturedPosts posts={featuredPosts} />
    )
}

export default homePage