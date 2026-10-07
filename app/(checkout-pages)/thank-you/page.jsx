import Image from "next/image"
import Link from "next/link"
import "../../../styles/component/component.css"

export default function Thankyou(){
    return(
        <div className="thankyou_box sec-pad">
            <div className="container">
                <div className="colA">
                    <div className="icon">
                        <Image src="/assets/images/checkout/order_completed.svg" alt="Order Completed" width="50" height="60"></Image>
                    </div>
                    <p>Thank you for your order</p>
                </div>
                <div className="colB">
                    <p>We sent an order comfirmation to</p>
                    <Link href="mailto:info@uniformbucket.com">info@uniformbucket.com</Link>
                    <p>Your order number is :</p>
                    <span>349830</span>
                    <p>Your order will deliver on :</p>
                    <span>Wednesday, June 18 - Friday, June 20</span>
                    <p>to the address :</p>
                    <span>FF, C-68, Okhla Phase 1, New Delhi - 110020</span>
                    <Link href="/product-listing" className="btn black_fill">Continue Shopping</Link>
                </div>
            </div>
        </div>
    )
}