"use client"
import BannerWrapper from "@/components/BannerWrapper";
import "../../../styles/contact/contact.css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ContactUs() {
  const contactRef = useRef(null)

  const scrollToContact = () =>{
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main>
      <BannerWrapper
        classname="contact_banner"
        videoSrc="/assets/images/contact/contact_banner.mp4"
        poster="/assets/images/contact/contact_banner_poster.jpg"
        heading="Contact us"
        desc="Have a Question? Get in Touch with Our Fashion Experts"
        scrollto={scrollToContact}
      />
      <section>
        <div className="contact-secA sec-pad" ref={contactRef}>
          <div className="container">
            <div className="heading">
              <div className="icon">
                <Image
                  src="/assets/images/contact/ub_icon.svg"
                  width="70"
                  height="70"
                  alt="UB Icon"
                />
              </div>
              <h3>A Unit of JAF Enterprises Pvt. Ltd</h3>
            </div>
            <div className="contact_wrapper">
              <div className="contact_col">
                <div className="icon">
                  <Image
                    src="/assets/icon/location.svg"
                    width="26"
                    height="26"
                    alt="Location Icon"
                  />
                </div>
                <div className="content">
                  <p className="title">Factory</p>
                  <Link href="">
                    RZ 448A, Street No 14B, Tughlakabad Extension, New Delhi
                    -110019.
                  </Link>
                  <Link href="" className="get_direct">
                    Get Directions
                  </Link>
                </div>
              </div>
              <div className="contact_col">
                <div className="icon">
                  <Image
                    src="/assets/icon/location.svg"
                    width="26"
                    height="26"
                    alt="Location Icon"
                  />
                </div>
                <div className="content">
                  <p className="title">Marketing Office</p>
                  <Link href="">
                    FF, C-68, Okhla Phase I, New Delhi - 110020
                  </Link>
                  <Link href="" className="get_direct">
                    Get Directions
                  </Link>
                </div>
              </div>
              <div className="contact_col call_col">
                <div className="icon">
                  <Image
                    src="/assets/icon/call.svg"
                    width="26"
                    height="26"
                    alt="Location Icon"
                  />
                </div>
                <div className="content">
                  <p className="title">Call us</p>
                  <Link href="">
                    +91 8860 300 234
                  </Link>
                  <Link href="">
                    +91 8285 309 609
                  </Link>
                  <Link href="" className="whtsp">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                    +91 8860 300 234
                  </Link>
                </div>
              </div>
              <div className="contact_col">
                <div className="icon">
                  <Image
                    src="/assets/icon/mail.svg"
                    width="26"
                    height="26"
                    alt="Location Icon"
                  />
                </div>
                <div className="content">
                  <p className="title">Write to us</p>
                  <Link href="">
                    info@uniformbucket.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-secB sec-pad">
            <div className="container">
                <div className="heading">
                    <h3>Have any questions? We'd love to hear from you.</h3>
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
                        <input type="email" name="email" className="form-control" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="tel" name="mobile" className="form-control" />
                        <label htmlFor="mobile">Phone</label>
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
      <section>
        <div className="contact-secC">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56087.61656947213!2d77.18583392167967!3d28.525408000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce168543cdea9%3A0x9d06ab47bd8c4d85!2sUniform%20Bucket!5e0!3m2!1sen!2sin!4v1751355016391!5m2!1sen!2sin" width="100%" height="600" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  );
}
