"use client"
import CounterBanner from "@/components/CounterBanner"
import "../../../styles/about/about.css"
import Image from "next/image"
import HomeGlobe from "@/components/HomeGlobe"
import { useRef, useState } from "react"
import BannerWrapper from "@/components/BannerWrapper"


export default function AboutUs(){
    const aboutRef = useRef(null)
    const [height, setHeight] = useState(false)

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return(
        <main>
            <BannerWrapper
                classname="about_banner"
                videoSrc="/assets/video/about_banner.mp4"
                poster="/assets/video/about_banner_poster.jpg"
                heading="About Company"
                desc="The world of work wear, corporate wear, hospital wear, hotel wear, school and college wear. "
                scrollto={scrollToAbout}
            />
            <section>
                <div className="about-secA sec-pad" ref={aboutRef}>
                    <div className="container flex">
                        <div className="colA">
                            <div className="ub_icon">
                                <video src="/assets/images/about/mask_video.mp4" autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                        <div className="colB">
                            <h2>OUR STORY</h2>
                            <div className={`content ${height ? "open_height" : ""}`}>
                                <p>UNIFORM BUCKET, A unit of JAF Enterprises Pvt. Ltd. is a fast emerging name in the world of work wear, corporate wear, hospital wear, hotel wear, school and college wear. We are providing quality garments for a diverse range of people, industries and commercial establishments.</p>
                                <p>Backed by over a decade of experience in the industry, our expertise has been carefully cultivated through a work ethic that strives for excellence in every project that we undertake, From cutting, stitching, to finishing and packing all our processes integrated under one roof this gives us tremendous flexibility in handling projects where we work to client specifications. Integration also empowers us to plan, design and implement projects with minimal lead times.</p>
                                <p>We are committed to providing products that are built to the satisfaction of the customer. Our clientele is a demonstration of our capabilities in the industry and dedication to our work. We look forward to serving new customers around the country forming and enriching long-lasting partnership with them.</p>
                                <p>Our product fits you beautifully and makes you feel amazing, your employees will look and feel great wearing our Hospital uniforms and your clients will notice the positive difference in their performance.</p>
                            </div>
                            <button type="button" className="read_more" onClick={() => setHeight(prev => !prev)}>Read More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5" strokeWidth={1}></path></svg></button>
                        </div>
                    </div>
                </div>
            </section>
            <CounterBanner  
                classname="about_counter"
                videoSrc="/assets/images/about/about-secB-banner.mp4"
                heading="Our Mission"
                subHeading="Our mission is to provide a high-quality uniform garment and one-stop services to satisfy our client’s needs through a range of efficient, effective manufacturing activities and delivered on a holistic basis."
                count1="10000"
                cnt1desc="Happy Customer"
                count2="25"
                cnt2desc="Industries Served"
                count3="9000"
                cnt3desc="Pin Codes Delivered"
                count4="15000"
                cnt4desc="Orders Placed"
            />
            <HomeGlobe classname="aboutus_globe" />
        </main>
    )
}