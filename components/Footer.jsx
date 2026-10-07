"use client"
import Image from "next/image"
import "../styles/footer/footer.css"
import Link from "next/link"
import EnquirePop from "./EnquirePop"
import SearchPop from "./SearchPop"
import Hamburger from "./Hamburger"
import Overlay from "./Overlay"
import { useModalStore } from "@/store/modalStore"
import LoginPop from "./LoginPop"
import SignUpPop from "./SignUpPop"
import { usePathname } from "next/navigation"
import ForgetPassPop from "./ForgetPassPop"
export default function Footer(){
    const openEnquire = useModalStore((state) => state.openEnquire)
    const openLogin = useModalStore((state) => state.openLogin)
    const pathname = usePathname()
    const isProductPage = pathname.startsWith('/product-detail')
    const isCartPage = pathname.startsWith('/cart')
    const isAddressPage = pathname.startsWith('/address')
    const isPaymentPage = pathname.startsWith('/payment')

    const DisplayNonePage = isCartPage || isAddressPage || isPaymentPage || isProductPage
    return(
        <>
            <div className="upper-wrapper">
                <div className="add_item">
                    <Image src="/assets/icon/bulk.svg" width="40" height="40" alt="Bulk Order Icon" />
                   
                    <div className="content">
                        <h6>Bulk Order</h6>
                        <p>Get a good discount on bulk orders.</p>
                    </div>
                </div>
                <div className="add_item">
                    <Image src="/assets/icon/world.svg" width="40" height="40" alt="Pan Delivery Icon" />
                    <div className="content">
                        <h6>PAN INDIA DELIVERY</h6>
                        <p>Get your uniform delivered at your doorstep.</p>
                    </div>
                </div>
                <div className="add_item">
                    <Image src="/assets/icon/exchange.svg" width="40" height="40" alt="Exchanges Icon" />
                    <div className="content">
                        <h6>7 DAYS EXCHANGE*</h6>
                        <p>Simply exchange it within 7 days.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="upper-footer">
                        <div className="colA form">
                            <Link href="/">
                                <img src="/logo.svg" width="219" height="25" alt="Logo"></img>
                            </Link>
                            <div className="form-group">
                                <input id="email" className="form-control" type="email" name="email"></input>
                                <label htmlFor="email">Enter Your Email Address</label>
                            </div>
                            <p>*By proceeding, you agree to the Aarohi Nursery Terms & Conditions, have read and understood the Aarohi Nursery Privacy Policy, and consent to receiving brand marketing messages.</p>
                        </div>
                        <div className="colB">
                            <div className="list_item">
                                <h6>Products</h6>
                                <ul>
                                    <li><Link href="/product-listing">Corporate</Link></li>
                                    <li><Link href="/product-listing">Hotel</Link></li>
                                    <li><Link href="/product-listing">SPA & Salon</Link></li>
                                    <li><Link href="/product-listing">Industrial</Link></li>
                                    <li><Link href="/product-listing">Security</Link></li>
                                    <li><Link href="/product-listing">Hospital</Link></li>
                                </ul>
                            </div>
                            <div className="list_item">
                                <h6>Company</h6>
                                <ul>
                                    <li><Link href="/about-us">About us</Link></li>
                                    <li><Link href="/contact-us">Contact us</Link></li>
                                    <li><Link href="/faqs">FAQ’s</Link></li>
                                    <li><Link href="/careers">Careers</Link></li>
                                    <li><Link href="/blogs">Blogs</Link></li>
                                </ul>
                            </div>
                            <div className="list_item">
                                <h6>Legal</h6>
                                <ul>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                                    <li><Link href="/shipping-and-delivery">Shipping & Delivery</Link></li>
                                    <li><Link href="/return-and-exchange">Returns & Exchanges</Link></li>
                                    <li><Link href="/assets/images/Measurment_Chart.pdf" target="_blank">Size Guide</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lower-footer">
                        <div className="colC">
                            <ul className="social_icons">
                                <li><Link href="" target="_blank"><Image src="/assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="" target="_blank"><Image src="/assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="" target="_blank"><Image src="/assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="" target="_blank"><Image src="/assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="" target="_blank"><Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                            </ul>
                            <ul className="contact_no">
                                <li><Link href="tel:+92XXX">+91 - XXXXXXXXXX</Link></li>
                                <li><Link href="tel:+91XXXXXXXXXX">XXXXXXXXXX</Link></li>
                            </ul>
                        </div>
                        <div className="colD flex">
                            <Link href="">
                            <Image src="/assets/icon/whatsapp.svg" width="18" height="18" alt="Whatsapp icon"></Image> Whatsapp</Link>
                            <Link href="/pay-online">Pay Online</Link>
                            <button className="corp_login" onClick={openLogin}>Corporate Login</button>
                        </div>
                    </div>
                </div>
                <div className="footer_rights">
                    <div className="container flex">
                        <p>©  Aarohi Nursery. All Right Reserved</p>
                        <div className="add_icon">
                            <p>Powered by :</p>
                            <Image src="/assets/images/home/footer_powered.png" alt="Powered By" width="200" height="34"></Image>
                        </div>
                    </div>
                </div>
            </footer>
            <Overlay />
            <div className={`sticky_action flex ${DisplayNonePage? 'display-none' : ""}`}>
                <Link className="whatsapp" href="https://api.whatsapp.com/send?phone=918285309609&text=Hello%20Team%20Uniform%20Bucket!%20I%20am%20interested%20in%20one%20of%20your%20Products.%20Please%20touch%20base%20with%20me." target="_blank">
                    <Image src="/assets/icon/whatsapp.svg" width="24" height="24" alt="Whatsapp"></Image>
                </Link>
                <button className="call_action" onClick={openEnquire}>
                    <Image src="/assets/icon/logo.svg" width="29" height="27" alt="Uniform Buacket"></Image>
                    <p>Request a call</p>
                </button>
            </div>
            <LoginPop />
            <SignUpPop />
            <EnquirePop />
            <SearchPop />
            <ForgetPassPop />
            <Hamburger />
        </>
    )
}