// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import FeaturedPosts from "@/app/_components/FeaturedPosts";
import { featuredPostsQuery } from "@/sanity/lib/queries";

export default function PreviewFeaturedPosts({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [data] = useLiveQuery(posts, featuredPostsQuery);

  return <FeaturedPosts posts={data} />;
}