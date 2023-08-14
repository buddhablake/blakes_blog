// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import PreviewProvider from "@/app/_components/PreviewProvider";
import { cachedClient } from "@/sanity/lib/client";
import { categoryPostsQuery } from "@/sanity/lib/queries";
import { getCachedClient } from "@/sanity/lib/getClient";
import Posts from "@/app/_components/Posts";

// Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await cachedClient(categoryPostsQuery);

//   return posts;
// }

export default async function Page({ params }: { params: any }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const posts = await getCachedClient(preview)(categoryPostsQuery, params);
  console.log(posts)
//   if (preview?.token) {
//     return (
//       <PreviewProvider token={preview.token}>
//         <PreviewPost post={post} />
//       </PreviewProvider>
//     );
//   }

  return (
  <>
  <h2>Category: {posts[0].categories[0].title}</h2>
  <Posts posts={posts} />
  </>);
}