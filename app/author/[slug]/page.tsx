// ./nextjs-app/app/[slug]/page.tsx


import { cachedClient } from "@/sanity/lib/client";
import { authorPostsQuery } from "@/sanity/lib/queries";
import { getCachedClient } from "@/sanity/lib/getClient";
import Posts from "@/app/_components/Posts";
// Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const authorData = await cachedClient(authorPostsQuery);

//   return authorData;
// }

export default async function Page({ params }: { params: any }) {
  console.log(params)
  const authorArchive = await getCachedClient()(authorPostsQuery, params);
console.log(authorArchive)
  return (
  <>
  <h2>Author: {authorArchive?.name}</h2>
  <Posts posts={authorArchive?.posts} />
  </>
  );
}