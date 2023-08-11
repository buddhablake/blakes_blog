import Image from 'next/image'
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

const BackgroundImage = ({image}: {image: any}) => {
    return (
        <Image
            className=""
            alt="Mountains"
            src={builder.image(image).url()}
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}

export default BackgroundImage

