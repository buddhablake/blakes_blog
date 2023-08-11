// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Categories from "@/app/_components/Categories";
import { categoriesQuery } from "@/sanity/lib/queries";

export default function PreviewCategories({
  categories = [],
}: {
  categories: SanityDocument[];
}) {
  const [data] = useLiveQuery(categories, categoriesQuery);

  return <Categories categories={data} />;
}