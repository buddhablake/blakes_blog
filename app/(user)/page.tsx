import FeaturedPosts from "@/app/_components/FeaturedPosts"

import { getCachedClient } from "@/sanity/lib/getClient";
import { featuredPostsQuery, portfolioQuery } from "@/sanity/lib/queries";
import Works from "@/app/_components/Works";

const homePage = async () => {
    const featuredPosts = await getCachedClient()(featuredPostsQuery);
    const works = await getCachedClient()(portfolioQuery)
    return (
        <>
        <Works works={works} />
        <FeaturedPosts posts={featuredPosts} />
        </>
    )
}

export default homePage