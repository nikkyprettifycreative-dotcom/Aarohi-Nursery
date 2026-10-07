"use client"
import CheckoutSummary from "@/components/CheckoutSummary";
import Image from "next/image";
import Link from "next/link";

const summaryItems = [
  { label: "Total MRP", value: "₹37,695" },
  { label: "Discount on MRP", value: "-₹7,695", highlight: "green-color" },
  { label: "Coupon Discount", value: "₹0.00" },
  { label: "Shipping Fee", value: "Free", highlight: "green-color" },
  { label: "GST", value: "₹100.00" },
]
export default function Payment(){
    return (
        <div className="check-out-main">
        <div className="check-out-secA-zbyqo">
          <div className="container">
            <div className="flex-checkout-cwgln">
              <div className="colA-flex-hfmcf">
                <div className="bag-dobyk">
                  <div className="upper-sshjm">
                    <h6>Payment</h6>
                  </div>
                  <div className="bag-product-wrsvn-wrap">
                    <div className="pay_details">
                        <Image src="/assets/images/checkout/cc_avenue.svg" width="180" height="45" alt="CC Avenue's Logo" />
                        <p>100 % Secure Payment</p>
                        <div className="radio_wrapper">
                            <div className="chk-box">
                                <input type="checkbox" name="address" />
                                <div className="in-bx"></div>
                            </div>
                            <p>Pay securely by Credit or Debit card or internet banking through CCAvenue Secure Servers.</p>
                        </div>
                        <div className="check_wrapper">
                            <div className="chk-box">
                                <input type="checkbox" name="address" />
                                <div className="in-bx"></div>
                            </div>
                            <p>I have read and agree to the website <Link href=''>terms and conditions</Link> </p>
                        </div>
                        <Link className="btn black_fill" href="/thank-you">Pay Now</Link>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="colB-flex-hfmcf">
                <CheckoutSummary
                  classname="pay_summ"
                  summaryItems={summaryItems}
                  totalAmount="₹37,100"
                  button="Continue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}