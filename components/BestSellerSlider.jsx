"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import ProductCol from "./ProductCol";

export default function BestSellerSlider({ classname="", heading="" }){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className={`bestSeller_slider_wrapper gray-bg sec-pad ${classname}`}>
            <div className="container-fluid slider-section">
                <div className="upper-sec">
                <div className="heading">
                    <h2>{heading}</h2>
                </div>
                <div className="slider-nav">
                    <button type="button" className="swiper-prev bestSeller-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                    <button type="button" className="swiper-next bestSeller-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                </div>
                </div>
            <Swiper 
                ref={swiperRef}
                className="bestSeller_slider"
                modules={[Navigation]}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".bestSeller-prev",
                    nextEl: ".bestSeller-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 7,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <ProductCol
                        imgSrc="/assets/images/product/areca.jpg"
                        proName="Areca Palm"
                        price="₹ 399.00"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCol
                        imgSrc="/assets/images/product/snake.jpg"
                        proName="Snake Plant"
                        price="₹ 299.00"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCol
                        imgSrc="/assets/images/product/money.jpg"
                        proName="Money Plant"
                        price="₹ 249.00"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCol
                        imgSrc="/assets/images/product/peace.jpg"
                        proName="Peace Lily"
                        price="₹ 449.00"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCol
                        imgSrc="/assets/images/product/zz.jpg"
                        proName="ZZ Plant"
                        price="₹ 549.00"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="btn_wrapper">
              <Link href="/product-listing" className="btn black">Explore All Plants</Link>
            </div>
            </div>
        </div>
    )
}