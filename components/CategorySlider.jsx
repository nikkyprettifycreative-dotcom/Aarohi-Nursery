"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import CategoryItem from "./CategoryItem";

export default function CategorySlider({ classname }){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className={`category_slider_wrapper ${classname}`}>
            <div className="container-fluid slider-section">
                <div className="upper-sec">
                <div className="heading">
                    <h2>Shop By Categories</h2>
                </div>
                <div className="slider-nav">
                    <button type="button" className="swiper-prev category-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                    <button type="button" className="swiper-next category-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                </div>
                </div>
            <Swiper 
                ref={swiperRef}
                className="category_slider"
                modules={[Navigation]}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".category-prev",
                    nextEl: ".category-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/indoor.jpg"
                        heading="Indoor Plants"
                        subHeading="Bring Nature Into Your Home"
                        href="/product-listing"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/medicinal.jpg"
                        heading="Medicinal & Herbal"
                        subHeading="Nature's Own Healing Garden"
                        href="/product-listing"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/ornamet.jpg"
                        heading="Ornamental & Foliage"
                        subHeading="Lush Greens for Every Space"
                        href="/product-listing"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/creeper-climber.jpg"
                        heading="Creepers & Climbers"
                        subHeading="Vertical Greenery for Walls"
                        href="/product-listing"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/ground.jpg"
                        heading="Lawn & Ground Cover"
                        subHeading="Green Carpets for Your Garden"
                        href="/product-listing"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/bamboo.jpg"
                        heading="Bamboo & Grasses"
                        subHeading="Natural Screening & Elegance"
                        href="/product-listing"
                    />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}