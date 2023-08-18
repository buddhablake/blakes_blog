import {draftMode} from "next/headers"
import FeaturedPosts from "@/app/_components/FeaturedPosts"
import PreviewFeaturedPosts from "@/app/_components/PreviewFeaturedPosts";
import PreviewProvider from "@/app/_components/PreviewProvider";
import { getCachedClient } from "@/sanity/lib/getClient";
import { featuredPostsQuery, portfolioQuery } from "@/sanity/lib/queries";
import Works from "@/app/_components/Works";
import Hero from "@/app/_components/Hero";

const homePage = async () => {
    const preview = draftMode().isEnabled ? {token: process.env.SANITY_API_READ_TOKEN} : undefined
    const featuredPosts = await getCachedClient()(featuredPostsQuery);
    const works = await getCachedClient(preview)(portfolioQuery)

    if(preview && preview.token) {
    return (
        <PreviewProvider token={preview.token}>
            <PreviewFeaturedPosts posts={featuredPosts} />
        </PreviewProvider>
    )
    }


    return (
        <>
        <Hero />
        <main className="container mx-auto px-12">
        {/* <Works works={works} />
        <FeaturedPosts posts={featuredPosts} /> */}
        </main>
        </>
    )
}

export default homePage