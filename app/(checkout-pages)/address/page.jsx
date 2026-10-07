"use client"
import AddressPop from "@/components/AddressPop";
import CheckoutSummary from "@/components/CheckoutSummary";
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const summaryItems = [
  { label: "Total MRP", value: "₹37,695" },
  { label: "Discount on MRP", value: "-₹7,695", highlight: "green-color" },
  { label: "Coupon Discount", value: "₹0.00" },
  { label: "Shipping Fee", value: "Free", highlight: "green-color" },
  { label: "GST", value: "₹100.00" },
]
export default function Address(){
    const [addressBtn, setAddressBtn] = useState(false)
    const openAddress = useModalStore((state) => state.openAddress)
    return (
      <>
        <div className="check-out-main">
        <div className="check-out-secA-zbyqo">
          <div className="container">
            <div className="flex-checkout-cwgln">
              <div className="colA-flex-hfmcf">
                <div className="bag-dobyk">
                  <div className="upper-sshjm">
                    <h6>Billing Address</h6>
                    <button type="button" className="btn gray_border" onClick={openAddress}>
                      <span className="sm-none">Add New Address</span>
                      <span className="sm-block">Add Address</span>
                    </button>
                  </div>
                  <div className="bag-product-wrsvn-wrap">
                    <div className="add_details">
                        <div className="chk-box">
                            <input type="checkbox" name="address" />
                            <div className="in-bx"></div>
                        </div>
                        <div className="content">
                            <h6 className="name">Aditya</h6>
                            <p className="address">Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana</p>
                            <div className="contact">
                                <p className="mob">
                                    Mobile : <Link href="tel:+91-9953750281">+91 - 9953750281</Link>
                                </p>
                                <div className="btn_wrap">
                                    <button type="button" className="remove">Remove</button>
                                    <button type="button" className="edit">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add_details">
                        <div className="chk-box">
                            <input type="checkobx" name="address" />
                            <div className="in-bx"></div>
                        </div>
                        <div className="content">
                            <h6 className="name">Aditya</h6>
                            <p className="address">Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana</p>
                            <div className="contact">
                                <p className="mob">
                                    Mobile : <Link href="tel:+91-9953750281">+91 - 9953750281</Link>
                                </p>
                                <div className="btn_wrap">
                                    <button type="button" className="remove">Remove</button>
                                    <button type="button" className="edit">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="ship_address">
                    <div className="upper">
                        <div className="chk-box">
                            <input type="checkbox" name="shipping" onClick={() => setAddressBtn(prev => !prev)} />
                            <div className="in-bx"></div>
                        </div>
                        <p>Ship to a different address</p>
                    </div>
                    <button type="button" className={`btn gray_border ${addressBtn ? "on" : ""}`} onClick={openAddress}>Add new address</button>
                  </div>
                </div>
              </div>
              <div className="colB-flex-hfmcf add_sum">
                <CheckoutSummary
                  classname="address_summ"
                  summaryItems={summaryItems}
                  totalAmount="₹37,100"
                  button="Continue"
                  buttonHref="/payment"
                />
                <div className="others">
                    <p className="title">Order Includes</p>
                    <div className="other_order">
                        <figure>
                            <Image src="/assets/images/other/img1.jpg" width="70" height="70" alt="Product Image" />
                        </figure>
                        <figcaption>
                            <h6 className="pro_name">Black Formal Blazer For Men</h6>
                            <ul>
                                <li>Size: <span>M, S, XL, 3XL</span></li>
                                <li>Qty: <span>5</span></li>
                                <li>Price: <span>₹3,750.00 + ₹150.00</span></li>
                                <li className="total">Total : <span>₹3,900.00</span></li>
                            </ul>
                        </figcaption>
                    </div>
                </div>
              </div>
            </div>
            <div className="btm-check-out-cwgln">
              <div className="container">
                <ul className="bank-list">
                  <li>
                    <Image
                      src="/assets/images/checkout/american-express.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/bhim-upi.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/cod.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/dc-bank.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/master-card.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/net-banking.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/paypal.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/rupay.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/checkout/visa.png"
                      alt="Payment Methods"
                      width="69"
                      height="40"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      <AddressPop />
      </>
    );
}