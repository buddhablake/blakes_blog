'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules'
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

// Import Swiper styles
import 'swiper/css';

const SwiperSlider = ({ slides }: { slides: any }) => {
    return (
        <Swiper
        className="rounded-lg"
            loop
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Keyboard]}
            keyboard
        >
            {slides.map((slide: any) => {
                return (
                    <SwiperSlide key={slide._id}>
                        <div className="h-[600px] w-[800px] max-w-11/12">
                            <Image
                                className="object-cover object-center h-full w-full"
                                alt="fuck"
                                key={slide._id}
                                src={builder.image(slide).width(1200).height(1200).url()}
                                fill
                            />
                        </div>
                    </SwiperSlide>
                )
            }
            )}

        </Swiper>
    );
};

export default SwiperSlider