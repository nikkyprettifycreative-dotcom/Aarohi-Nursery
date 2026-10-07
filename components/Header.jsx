"use client"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay  } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import "../styles/header/header.css"
import { useEffect, useState, useRef } from "react"
import { useModalStore } from '../store/modalStore';
import { usePathname } from "next/navigation";

export default function Header(){
    const swiperRef = useRef(null)
    const openSearch = useModalStore((state) => state.openSearch);
    const openHam = useModalStore((state) => state.openHam);
    const openLogin = useModalStore((state) => state.openLogin)
    const [headerFixed, setHeaderFixed] = useState(false)
    const [marque, setMarque] = useState(false)
    const [marqueActive, isMarqueActive] = useState(false)
    const pathname = usePathname()
    const isProductListingPage = pathname.startsWith('/product-listing')
    const isProductDetailPage = pathname.startsWith('/product-detail')
    const isProfilePage = pathname.startsWith('/profile')
    const isOrderPage = pathname.startsWith('/order')
    const isWishlistPage = pathname.startsWith('/wishlist')
    const isBlogsPage = pathname.startsWith('/blogs')
    const isFaqPage = pathname.startsWith('/faqs')
    const isPayOnlinePage = pathname.startsWith('/pay-online')
    const isPrivacyPage = pathname.startsWith('/privacy-policy')
    const isTermsPage = pathname.startsWith('/terms-and-conditions')
    const isShippingPage = pathname.startsWith('/shipping-and-delivery')
    const isReturnPage = pathname.startsWith('/return-and-exchange')
    const headerFill = isProductListingPage || isProductDetailPage || isProfilePage || isOrderPage || isWishlistPage || isBlogsPage || isFaqPage || isPayOnlinePage || isPrivacyPage || isTermsPage || isShippingPage || isReturnPage
    useEffect(() => {
        let dropdownLi = document.querySelectorAll('.hasDropdown')
        let overlay = document.querySelector('.overlay2')

        dropdownLi.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.classList.add('active');
                overlay.classList.add('is-open')

                dropdownLi.forEach(item => {
                    const hoverItem = item.querySelector('.hasHover')
                    if (hoverItem) {
                        hoverItem.style.color = 'rgba(255, 255, 255, 0.6980392157)'
                    }
                })

                const currentHover = this.querySelector('.hasHover')
                if(currentHover) {
                    currentHover.style.color = '#fff';
                }
            })
            dropdown.addEventListener('mouseleave', function(){
                this.classList.remove('active')
                overlay.classList.remove('is-open')

                dropdownLi.forEach(item => {
                    const hoverItem = item.querySelector('.hasHover')
                    if(hoverItem) {
                        hoverItem.style.color = '#fff';
                    }
                })
            })
        })
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100)
            setMarque(window.scrollY > 100)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100)
    }, [])
    return(
        <>
            <div className={`marque_container ${marque ? "active" : ""} ${marqueActive ? "d-none" : ""}`}>
                <div className="marque-wrapper">
                    <div className="marque-nav swiper-nav center-full">
                        <button className="marque-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                        <button className="marque-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                    </div>
                    <Swiper
                    ref={swiperRef}
                    className="marque_slider"
                    modules={[Navigation, Autoplay]}
                    autoplay = {{
                        delay: 2000,
                        pauseOnMouseEnter: true
                        }}
                    slidesPerView={1}
                    speed={1000}
                    navigation={{
                        prevEl: ".marque-prev",
                        nextEl: ".marque-next"
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <p>🌱 Free Shipping on Orders Above ₹599</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>🔄 7-Day Free Replacement on All Plants</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>🎁 Get 10% Off on Orders Above ₹999 | Code: GREEN10</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>🌿 Buy 2 Plants, Get 1 Free on Selected Varieties</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>🚚 Same-Day Dispatch on Orders Before 2 PM</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>📸 Live Plant Photos Before Dispatch — 100% Fresh Guarantee</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <button type="button" className="stopSlider" onClick={() => isMarqueActive(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                        <path fill="#fff" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
                    </svg>
                </button>
            </div>
            <header className={`${headerFill ? "header-fill" : ""} ${headerFixed ? "header-fixed" : ""} ${marqueActive ? "no_marque" : ""}`}>
                <div className="header-wrapper container-fluid">
                    <div className="colA">
                        <Link href="/">
                            <Image src="/logo.svg" width="219" height="30" alt="Logo" className="sm-none"></Image>
                            <Image src="/logo.svg" width="50" height="30" alt="Logo" className="sm-block"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="navlist">
                            <li className="hasDropdown">
                                <Link href="/product-listing" className="hasHover">Indoor Plants</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Air Purifying Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Low Light Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Table Top Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Floor Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Hanging Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Bonsai Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Feng Shui Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Pet-Friendly Plants</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Outdoor Plants</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Flowering Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Fruit Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Shade Trees</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Hedges & Shrubs</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Climbers & Creepers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Ground Covers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Palm Trees</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Bamboo Plants</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Flowering Plants</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Rose Plants</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Hibiscus</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Jasmine (Mogra)</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Bougainvillea</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Marigold</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Plumeria (Champa)</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Lotus</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Orchids</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Medicinal & Herbal</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Tulsi (Holy Basil)</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Aloe Vera</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Curry Leaf (Kadi Patta)</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Mint (Pudina)</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Lemongrass</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Ashwagandha</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Brahmi</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Neem</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Seeds & Bulbs</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Flower Seeds</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Vegetable Seeds</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Herb Seeds</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Fruit Seeds</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Grass Seeds</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Bulbs & Tubers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Seed Kits</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Organic Seeds</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Pots & Planters</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Ceramic Pots</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Terracotta Pots</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Plastic Pots</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Hanging Planters</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Self-Watering Pots</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Metal Planters</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Wooden Planters</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Wall Planters</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="/product-listing" className="hasHover">Garden Care</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Potting Soil</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Fertilizers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Organic Manure</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Neem Oil & Pesticides</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Plant Growth Boosters</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Watering Cans</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Pruning Tools</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="/product-listing">Gardening Tools</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/bg.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="colC">
                        <ul className="call_action">
                            <li onClick={openSearch}><button><img src="/assets/icon/search-white.svg" alt="Search Icon" /></button></li>
                            
                            {/* <li className="myAccount" onClick={openLogin}> */}
                            <li className="myAccount" onClick={openLogin}>
                                <Link href=""><img src="/assets/icon/user-white.svg" alt="User Icon" />
                            </Link>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><Link href="">My Account</Link></li>
                                        <li><Link href="">My Order</Link></li>
                                        <li><Link href="">My Wislist</Link></li>
                                        <li><Link href="/">Log Out</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href=""><img src="/assets/icon/like-white.svg" alt="Wishlist Icon" /></Link>
                                <span className="dot-noti">5</span>
                            </li>
                            <li><Link href=""><img src="/assets/icon/cart-white.svg" alt="Cart Icon" /></Link>
                                <span className="dot-noti">5</span>
                            </li>
                            <li>
                                <button type="button" className="ham_btn md-block" onClick={openHam}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="overlay2"></div>
        </>
    )
}