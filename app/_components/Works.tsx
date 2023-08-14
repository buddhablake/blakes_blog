// ./nextjs-app/app/pages/index.tsx

import { PortableText } from "@portabletext/react";
import SwiperSlider from "@/app/_components/SwiperSlider";


const Works = ({works}: {works:any}) => (
    <div>
    <div className="h-8"></div>
            <h2 className="text-2xl text-black">Shit I've Built</h2>
    {works.map((work:any) => (
        <div key={work?._id}>
            <h1>{work?.title}</h1>
            {work?.body ? <PortableText value={work.body} /> : null}
               {work?.gallery?.images? (
                <div >
               <SwiperSlider slides={work.gallery.images} />
               </div>
               ) : null}
            
               
           </div>
       ))}
       </div>
)

export default Works