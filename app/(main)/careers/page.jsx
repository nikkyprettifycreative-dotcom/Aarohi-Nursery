"use client"
import BannerWrapper from "@/components/BannerWrapper";
import "../../../styles/career/career.css"
import { useRef, useState, useEffect } from "react";
import MySelect from "@/components/MySelect";

const openingData = [
    {
        title: "Software Engineer",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <button class="btn gray_border">
                Apply Now
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <ul>
                <li>Point1</li>
                <li>Point2</li>
                <li>Point3</li>
                <li>Point4</li>
                <li>Point5</li>
           </ul>
           <button class="btn gray_border">
                Apply Now
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <button class="btn gray_border">
                Apply Now
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
          <button class="btn gray_border">
                Apply Now
            </button>
        `
    },

]

const applyData = [
    {label: "Frontend Developer", value: "Frontend Developer" },
    {label: "Backend Developer", value: "Backend Developer" },
    {label: "Full Stack Developer", value: "Full Stack Developer" },
    {label: "Python Developer", value: "Python Developer" },
]


export default function Careers(){
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [AttachedFile, setAttachedFile] = useState([]);
    useEffect(() => {
        const fileInputs = document.querySelectorAll('input[type="file"].form-control');
        console.log(fileInputs)
    
        const handleChange = (event) => {
          const input = event.target;
          const fileName = input.value.replace(/C:\\fakepath\\/i, '');
          console.log(fileName)
          const sibling = input.parentElement.querySelector('.file-name'); 
          console.log(sibling)
          if (sibling) {
            sibling.style.setProperty('--filenameinitial', fileName ? `"${fileName}"` : 'var(--filename)');
          }
        };
    
        fileInputs.forEach(input => {
          input.addEventListener('change', handleChange);
        });
    
        // Cleanup on unmount
        return () => {
          fileInputs.forEach(input => {
            input.removeEventListener('change', handleChange);
          });
        };
    }, []);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const careerRef = useRef(null)
    const scrollToCareer = () => {
        careerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return(
        <main>
            <BannerWrapper
                classname="career_banner"
                videoSrc="/assets/images/career/career_banner.mp4"
                poster="/assets/images/career/career_banner_poster.jpg"
                heading="Careers"
                desc="Discover Opportunity. Shape Success."
                scrollto={scrollToCareer}
            />
            <section>
                <div className="career-secA sec-pad" ref={careerRef}>
                    <div className="container">
                        <div className="heading">
                            <h2>Why Join Us</h2>
                            <p>Become part of a dynamic team that blends creativity with craftsmanship. At our company, you’ll grow your skills, shape the future of fashion, and work in a supportive environment where innovation and quality matter.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="career-secB sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h2>Current Openings</h2>
                        </div>
                        <div className="current-openings">
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
            </section>
            <section>
                <div className="career-secC sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h3>Interested in joining us?</h3>
                            <p>Submit your CV, we will contact you as soon as we have relevant openings</p>
                        </div>
                        <div className="form form-grid">
                            <div className="form-group">
                                <input type="text" name="fname" className="form-control" />
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="form-group">
                                <input type="text" name="lname" className="form-control" />
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="mobile" className="form-control" />
                                <label htmlFor="mobile">Phone</label>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <MySelect
                                id="applyFor"
                                placeholder="Apply for"
                                options={applyData}
                                selectedValue={selectedPosition}
                                onValueChange={setSelectedPosition}
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                    width: "100%",
                                    height: "42px",
                                    minHeight: "42px",
                                    color: "#000",
                                    backgroundColor: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    border: state.isFocused ? "none" : "none",
                                    boxShadow: "none",
                                    '&:hover': {
                                        borderColor: '#000'
                                        }
                                    }),
                                    valueContainer: (base, state) => ({
                                        ...base,
                                        padding: "0 8px",
                                        color: "#666",
                                    }),
                                    input: (base, state) => ({
                                        ...base, 
                                        color: "#666"
                                    }),
                                    placeholder: (base, state) => ({
                                        ...base,
                                        color: "#666",
                                    }),
                                    singleValue: (base, state) => ({
                                        ...base,
                                        color: "#666",
                                    }),
                                }}
                            />
                            <div className="form-group file-input">
                                <input type="file" accept=".pdf,.docx" className="form-control" onChange={(e)=>setAttachedFile(e.target.files[0])} />
                                <div className="file-name"></div>
                            </div>
                            <div className="form-group full">
                                <textarea name="message" className="form-control" />
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className="btn_wrapper text-center full">
                                <button type="submit" className="btn black_fill">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}