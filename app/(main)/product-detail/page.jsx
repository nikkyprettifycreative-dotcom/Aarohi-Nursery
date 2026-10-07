"use client"
import Image from "next/image";
import Link from "next/link";
import "../../../styles/product/product.css"
import ProductDimage from "@/components/ProductDimage";
import { useState, useRef } from "react";
import ReviewBox from "@/components/ReviewBox";
import BestSellerSlider from "@/components/BestSellerSlider";
import EmbroideryPop from "@/components/EmbroideryPop";
import { useModalStore } from "@/store/modalStore";
import EmbroidGuide from "@/components/EmbroidGuide";
import VideoPopup from "@/components/VideoPop";

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function ProductDetail(){
    const reviewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [shareOpen, setShareOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [isGiftWrapped, setIsGiftWrapped] = useState(false);
    const [counts, setCounts] = useState({
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        "2XL": 0,
        "3XL": 0,
    });
    const increase = (size) => {
        setCounts(prev => ({ ...prev, [size]: prev[size] + 1 }));
    };
    const decrease = (size) => {
        setCounts((prev) => ({
        ...prev,
        [size]: prev[size] > 0 ? prev[size] - 1 : 0,
        }));
    };

    const handleInputChange = (e, size) => {
        const value = e.target.value;
        const numericValue = parseInt(value, 10);

        setCounts(prev => ({
            ...prev,
            [size]: isNaN(numericValue) ? 0 : numericValue,
        }));
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    

    const scrollToReview = () => {
        if(reviewRef.current) {
            const topPosition = reviewRef.current.getBoundingClientRect().top + window.pageYOffset
            const offset = 50
            window.scrollTo({ top: topPosition - offset, behavior : 'smooth' })
        }
    }

    const openEmbroidery = useModalStore((state) => state.openEmbroidery)
    return(
        <main>
            <div className="product-detail-container">
                <div className="container">
                    <ul className="breadcrumps">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/product-listing">Indoor Plants</Link></li>
                        <li><Link href="/product-listing">Air Purifying Plants</Link></li>
                        <li><Link href="/product-detail" className="active">Areca Palm</Link></li>
                    </ul>
                    <div className="detail-product-wrap">
                        <div className="colA">
                            <div className="product-image-wrap">
                                <ProductDimage 
                                    classname="videoHover"
                                    mainImg="/assets/images/product/areca.jpg"

                                    zoomImg="/assets/images/product/areca.jpg"
                                    videoSrc="/assets/images/category/bg.mp4"
                                    frameSrc="https://player.vimeo.com/video/781627907?h=2a86cb4c12"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/snake.jpg"
                                    zoomImg="/assets/images/product/snake.jpg"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/money.jpg"
                                    zoomImg="/assets/images/product/money.jpg"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/peace.jpg"
                                    zoomImg="/assets/images/product/peace.jpg"
                                />
                            </div>
                        </div>
                        <div className="colB">
                            <div className="sticky_div">
                                <h1 className="pro_title">Areca Palm</h1>
                            <div className="review_wrap">
                                <ul className="review_stars">
                                    <li data-value="1" className="first">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z" fill="#000" />
                                        </svg>
                                    </li>
                                    <li data-value="2" className="second">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z" fill="#000" />
                                        </svg>
                                    </li>
                                    <li data-value="3" className="third">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z" fill="#000" />
                                        </svg>
                                    </li>
                                    <li data-value="4" className="fourth">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z" fill="#000" />
                                        </svg>
                                    </li>
                                    <li data-value="5" className="fifth">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z" fill="#000" />
                                        </svg>
                                    </li>
                                </ul>
                                <div className="review_content">
                                    <p>2 Reviews</p>
                                    <p onClick={scrollToReview}>Write a Review</p>
                                </div>
                            </div>
                            <div className="price_wrapper">
                                <p className="price">₹399</p>
                                <div className="sku_code">
                                    <span>SKU:</span>
                                    <p>ARN-ARECA-06</p>
                                </div>
                            </div>
                            <div className="bulk_orders">
                                <p>Buy this in Bulk and get Extra Discounts</p>
                                <div className="bulk_order_content">
                                    <div className="bulk_wrap">
                                        <p>Sample</p>
                                        <div className="price">₹599</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>5 + pcs</p>
                                        <div className="price">₹399</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>20 + pcs</p>
                                        <div className="price">₹349</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>50 + pcs</p>
                                        <div className="price">₹299</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="select_size_wrap">
                                <div className="upper_sec">
                                    <h3>Select Pot Size</h3>
                                    <Link href="/assets/images/Measurment_Chart.pdf" target="_blank">Size Guide</Link>
                                </div>
                                <div className="sizes_wrapper">
                                     {sizes.map((size) => (
                                        <div className="size" key={size}>
                                        <p>{size}</p>
                                        <div className="size_count">
                                            <button type="button" onClick={() => decrease(size)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="none" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 12h-15" />
                                            </svg>
                                            </button>

                                            <input type="text" value={counts[size]} onChange={(e) => handleInputChange(e, size)} />

                                            <button type="button" onClick={() => increase(size)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="#666" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" />
                                            </svg>
                                            </button>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="add_to_wish">
                                    <Link href="/wishlist" className="wish_btn text-black">
                                        Add to Wishlist <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={20}
                                        viewBox="0 0 22 20"
                                        fill="none"
                                        className="svg"
                                        >
                                        <path
                                            d="M19.2495 11.3324L12.6497 17.9334C12.2121 18.3708 11.6187 18.6166 11 18.6166C10.3813 18.6166 9.78791 18.3708 9.35035 17.9334L2.75051 11.3336C2.20494 10.7928 1.77157 10.1495 1.47526 9.44076C1.17896 8.73201 1.02556 7.97172 1.02388 7.20353C1.0222 6.43534 1.17226 5.67438 1.46546 4.96434C1.75866 4.2543 2.18921 3.60916 2.73241 3.06597C3.2756 2.52277 3.92074 2.09221 4.63078 1.79902C5.34082 1.50582 6.10178 1.35575 6.86997 1.35744C7.63816 1.35912 8.39846 1.51251 9.10721 1.80882C9.81596 2.10512 10.4592 2.5385 11 3.08407C12.0985 2.01292 13.5748 1.41768 15.109 1.42729C16.6433 1.43691 18.112 2.0506 19.197 3.13543C20.282 4.22026 20.8959 5.68888 20.9057 7.22314C20.9155 8.7574 20.3205 10.2338 19.2495 11.3324Z"
                                            stroke="#000"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        </svg>

                                    </Link>
                                    <button type="button" className="share" onClick={() => setShareOpen(prev => !prev)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeWidth={1}><path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path><path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14"></path><path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path></g></svg>
                                        <ul className={`social_icons ${shareOpen ? "is-open" : ""}`}>
                                            <li><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></Link></li>
                                            <li><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg></Link></li>
                                            <li><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg></Link></li>
                                        </ul>
                                    </button>
                                </div>
                            </div> */}
                            <div className="btn_wrapper">
                                <button type="button" className="btn black">Add to Cart</button>
                                <button type="button" className={`btn gray ${isGiftWrapped ? "active" : ""}`} onClick={openEmbroidery}>{isGiftWrapped ? "Gift Wrap Added" : "Add Gift Wrap"} <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#000" d="M4.5 17.207V19a.5.5 0 0 0 .5.5h1.793a.5.5 0 0 0 .353-.146l8.5-8.5l-2.5-2.5l-8.5 8.5a.5.5 0 0 0-.146.353ZM15.09 6.41l2.5 2.5l1.203-1.203a1 1 0 0 0 0-1.414l-1.086-1.086a1 1 0 0 0-1.414 0z" strokeWidth={1}></path></svg></button>
                            </div>
                            <div className="pro_description">
                                <div className={`col ${activeIndex === 0 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(0)}>
                                        <h6>Description</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <br />
                                                <strong>Areca Palm</strong>
                                                <br />
                                                <br />
                                                Areca Palm is one of the best air-purifying indoor plants. Its lush green fronds add a tropical touch to any space while filtering indoor air. Easy to care for and perfect for homes, offices, and balconies.
                                            </p>
                                            <p>
                                                <br />
                                                <strong>PRODUCT DETAILS</strong>
                                                <br />
                                                <br />
                                                <strong>COLOR-&nbsp;&nbsp;</strong>Natural Green
                                                <br />
                                                <br />
                                                <strong>STYLE</strong>- Upright, Feathery Fronds
                                                <br />
                                                <strong>
                                                <br />
                                                SIZE
                                                </strong>
                                                - Medium (12-24 inch)
                                                <br />
                                                <br />
                                                <strong>PLANT TYPE</strong>- Air Purifying, Indoor
                                                <br />
                                                <br />
                                                <strong>SUNLIGHT</strong>- Bright Indirect
                                                <br />
                                                <br />
                                                <strong>WATERING</strong>- Twice a week
                                                <br />
                                                <br />
                                                <strong>HEIGHT</strong>-&nbsp; Approx 18-24 inches
                                                <br />
                                                <br />
                                                <strong>POT SIZE-&nbsp;</strong>6 inch (included)
                                                <br />
                                                <br />
                                                <strong>AIR PURIFICATION-&nbsp;</strong>&nbsp;High
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>SKU</strong>&nbsp;-&nbsp; ARN-ARECA-06
                                            </p>
                                            <div>&nbsp;</div>
                                            <p>
                                                <br />
                                                <strong>CARE</strong>- Do not overwater. Keep away from direct sunlight.
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                &nbsp;
                                                <br />
                                                <br />
                                                &nbsp;
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={`col ${activeIndex === 1 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(1)}>
                                        <h6>Specifications</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <br />
                                                <strong>PRODUCT DETAILS</strong>
                                                <br />
                                                <br />
                                                <strong>COLOR-&nbsp;&nbsp;</strong>Natural Green
                                                <br />
                                                <br />
                                                <strong>STYLE</strong>- Upright, Feathery Fronds
                                                <br />
                                                <strong>
                                                <br />
                                                SIZE
                                                </strong>
                                                - Medium (12-24 inch)
                                                <br />
                                                <br />
                                                <strong>PLANT TYPE</strong>- Air Purifying, Indoor
                                                <br />
                                                <br />
                                                <strong>SUNLIGHT</strong>- Bright Indirect
                                                <br />
                                                <br />
                                                <strong>WATERING</strong>- Twice a week
                                                <br />
                                                <br />
                                                <strong>HEIGHT</strong>-&nbsp; Approx 18-24 inches
                                                <br />
                                                <br />
                                                <strong>POT SIZE-&nbsp;</strong>6 inch (included)
                                                <br />
                                                <br />
                                                <strong>AIR PURIFICATION-&nbsp;</strong>&nbsp;High
                                                <br />
                                                <br />
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={`col ${activeIndex === 2 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(2)}>
                                        <h6>Q & A</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <strong>Q: How often should I water the Areca Palm?</strong>
                                                <br />
                                                A: Water twice a week in summer and once a week in winter. Let the topsoil dry between waterings.
                                                <br />
                                                <br />
                                                <strong>Q: Does it need direct sunlight?</strong>
                                                <br />
                                                A: No. Bright indirect light is ideal. Direct sun can burn the fronds.
                                                <br />
                                                <br />
                                                <strong>Q: Is it safe for pets?</strong>
                                                <br />
                                                A: Areca Palm is non-toxic to cats and dogs.
                                                <br />
                                                <br />
                                                <strong>Q: Does the pot come included?</strong>
                                                <br />
                                                A: Yes, a 6-inch pot is included with every order.
                                                <br />
                                                <br />
                                                <strong>Q: How big does it grow?</strong>
                                                <br />
                                                A: Indoor Areca Palms typically reach 6-8 feet with proper care.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-itqeq">
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/ship.svg" className="svg" alt="" />
                                    </div>
                                    <p>FREE SHIPPING IN WORDWIDE</p>
                                </div>
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/cod.svg" className="svg" alt="" />
                                    </div>
                                    <p>SAFE AND SECURE PAYMENTS</p>
                                </div>
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/return.svg" className="svg" alt="" />
                                    </div>
                                    <p>EASY RETURNS & EXCHANGE</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section ref={reviewRef}>
                <div className="customer_reviews sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h2>Customer Reviews</h2>
                        </div>
                        <div className="review_wrapper flex">
                            <div className="colA">
                                <div className="review-border">
                                    <div className="review_content">
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Priya Sharma"
                                            desc="The Areca Palm arrived fresh and healthy, beautifully packed. It's already brightening up my living room!"
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Rahul Verma"
                                            desc="Very happy with the quality. The plant was bigger than expected and looks great in my office."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Anjali Nair"
                                            desc="Healthy plant, well-rooted, and the pot was included. Delivery was fast. Will order again!"
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Karan Mehta"
                                            desc="Great packaging. The plant is thriving. Customer support was also very helpful."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="colB">
                                <div className="form review_form form-grid">
                                    <h6>Write a review</h6>
                                    <div className="rating">
                                        <p>Rating</p>
                                        <ul className="give_reviews">
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <li key={value} data-value={value} className={value <= rating ? "active" : ""} onClick={() => setRating(value)}>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" />
                                        <label htmlFor="Name">Your Name</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea" className="form-control" />
                                        <label htmlFor="message">Your Message</label>
                                    </div>
                                    <button type="button" className="btn black_fill">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BestSellerSlider heading="related products" />
            <EmbroideryPop markAsAdded={() => setIsGiftWrapped(true)} />
            <EmbroidGuide />
            <VideoPopup />
        </main>
    )
}