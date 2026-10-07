"use client"
import "../../../styles/faq/faq.css"
import { useState } from "react";

const openingData = [
    {
        title: "What if I need a logo on Uniform?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
    {
        title: "If I need some changes in existing designs available on websites, like increase or decrease in height of tunic or any other minor change?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
    {
        title: " If I don’t like the quality, can I return it back?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
    {
        title: " Should I get any discount on a bulk order?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
    {
        title: "If I need any design of my choice and color?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
    {
        title: "If I need delivery on an urgent basis as your timelines are 5-7 Day?",
        description: `
           <p>Yes, Logo can be Embroidered, all you need to do just click on interested in embroidery option and attach your required logo.</p>
        `
    },
]

export default function Faqs(){
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <main>
            <section>
                <div className="faq-secA sec-pad mt-hdrfxd">
                    <div className="container">
                        <div className="heading">
                            <h2>Faq’S</h2>
                            <p>Browse our Shopping FAQs to make your buying experience easy, smooth, and worry-free.</p>
                        </div>
                        <div className="faqs-section flex">
                            <div className="colA">
                                <div className="ub_icon">
                                    <video src="/assets/images/about/mask_video.mp4" autoPlay muted loop playsInline></video>
                                </div>
                            </div>
                            <div className="colB">
                                {
                                    openingData.length > 0 ? (
                                        openingData.map((opening, index) => (
                                            <div key={index} className={`col ${activeIndex === index ? "active" : ""}`}>
                                                <div className="title" onClick={() => toggleAccordion(index)}>
                                                    <h6>{opening.title}</h6>
                                                    <div className="ico"></div>
                                                </div>
                                                <article>
                                                    <div className="content-desc website-content">
                                                        <div dangerouslySetInnerHTML={{ __html: opening.description }} />
                                                    </div>
                                                </article>
                                            </div>
                                        ))                        
                                    ) : (
                                        <p className="text-center">No Current Openings.</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}