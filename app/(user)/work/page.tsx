// ./nextjs-app/app/pages/index.tsx

import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { portfolioQuery } from "@/sanity/lib/queries";

import Works from "@/app/_components/Works";



const Page =  async() => {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const works = await getCachedClient(preview)(portfolioQuery);

  

  return (
  <>
  <main className="container mx-auto p-12">
  <Works works={works} />
  </main>
  </>
  );
}

export default Page;