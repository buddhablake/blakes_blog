// import { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);


const AuthorCard = ({ author }: { author: SanityDocument }) => {
    return (
        <div>
            <div className="w-full">
                <div className="flex gap-4 items-center">
                    <div className="w-[100px] h-[100px] relative">
                    {author?.image ? (
                            <Image
                                className="rounded-full m-0"
                                src={builder.image(author.image).width(400).height(400).url()}
                                fill
                                alt={author?.image?.alt}
                            />
                            ) : null}
                            </div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-bolder">
                            {author?.name}
                        </p>
                        <p className="text-base">
                            {author?.bio ? <PortableText value={author.bio} /> : null}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default AuthorCard;