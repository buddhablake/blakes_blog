// ./nextjs-app/app/pages/index.tsx

import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { postsQuery, categoriesQuery, featuredPostsQuery } from "@/sanity/lib/queries";
import FeaturedPosts from "@/app/_components/FeaturedPosts";
import PreviewFeaturedPosts from "@/app/_components/PreviewFeaturedPosts";
import Categories from "@/app/_components/Categories";
import PreviewCategories from "@/app/_components/PreviewCategories";
import Posts from "@/app/_components/Posts";
import PreviewPosts from "@/app/_components/PreviewPosts";
import PreviewProvider from "@/app/_components/PreviewProvider";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const featuredPosts = await getCachedClient(preview)(featuredPostsQuery);
  const posts = await getCachedClient(preview)(postsQuery);
  const categories = await getCachedClient(preview)(categoriesQuery);

  if (preview && preview.token) {
    return (
      <>
      <PreviewProvider token={preview.token}>
        <PreviewFeaturedPosts posts={featuredPosts} />
        <PreviewCategories categories={categories} />
        <PreviewPosts posts={posts} />
      </PreviewProvider>
      </>
    );
  }

  return (
  <>
  <FeaturedPosts posts={featuredPosts} />
  <Categories categories={categories} />
  <Posts posts={posts} />
  </>
  );
}