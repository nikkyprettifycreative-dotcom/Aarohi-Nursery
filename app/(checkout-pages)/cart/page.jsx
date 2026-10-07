import CheckoutSummary from "@/components/CheckoutSummary";
import QuantityInput from "@/components/QuantityInput";
import Image from "next/image";
import Link from "next/link";

const summaryItems = [
  { label: "Total MRP", value: "₹37,695" },
  { label: "Discount on MRP", value: "-₹7,695", highlight: "green-color" },
  { label: "Coupon Discount", value: "₹0.00" },
  { label: "Shipping Fee", value: "Free", highlight: "green-color" },
  { label: "GST", value: "₹100.00" },
]

export default function Cart() {
  return (
    <div className="check-out-main">
      <div className="check-out-secA-zbyqo">
        <div className="container">
          <div className="flex-checkout-cwgln">
            <div className="colA-flex-hfmcf">
              <div className="bag-dobyk">
                <div className="upper-sshjm">
                  <h6>Shopping bag</h6>
                </div>
                <div className="bag-product-wrsvn-wrap">
                  <div className="bag-product-wrsvn">
                    <figure>
                      <Link href="">
                        <img src="/assets/images/other/img1.jpg" alt="Product Image" width="107" height="142" />
                      </Link>
                    </figure>
                    <figcaption>
                        <h6 className="title-tznlw">Black Formal Blazer For Men</h6>
                        <div className="sizes_wrapper">
                            <QuantityInput
                              classname="cart_size"
                              size="XS"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="S"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="M"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="L"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="2XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="3XL"
                            />
                        </div>
                        <div className="total_price">
                          <div className="emb_sec">
                            <p>Embroidery </p>
                            <Image src="/assets/images/checkout/emb_logo.png" width="128" height="47" alt="Embroidery Logo"></Image>
                          </div>
                          <div className="price_sec">
                              <div className="item_price">
                                <p>Item Price</p>
                                <span className="price">₹ 2,513.00</span>
                              </div>
                              <div className="item_price">
                                <p>Quantity</p>
                                <span className="price">350</span>
                              </div>
                              <div className="item_price">
                                <p>Embroidery </p>
                                <span className="price">₹ 50</span>
                              </div>
                              <div className="item_price">
                                <p>Total</p>
                                <span className="price">₹ 12,565</span>
                              </div>
                          </div>
                        </div>
                    </figcaption>
                    <button type="button" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bag-product-wrsvn">
                    <figure>
                      <Link href="">
                        <img src="/assets/images/other/img1.jpg" alt="Product Image" width="107" height="142" />
                      </Link>
                    </figure>
                    <figcaption>
                        <h6 className="title-tznlw">Black Formal Blazer For Men</h6>
                        <div className="sizes_wrapper">
                            <QuantityInput
                              classname="cart_size"
                              size="XS"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="S"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="M"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="L"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="2XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="3XL"
                            />
                        </div>
                        <div className="total_price">
                          <div className="emb_sec">
                            <p>Embroidery </p>
                            <Image src="/assets/images/checkout/emb_logo.png" width="128" height="47" alt="Embroidery Logo"></Image>
                          </div>
                          <div className="price_sec">
                              <div className="item_price">
                                <p>Item Price</p>
                                <span className="price">₹ 2,513.00</span>
                              </div>
                              <div className="item_price">
                                <p>Quantity</p>
                                <span className="price">350</span>
                              </div>
                              <div className="item_price">
                                <p>Embroidery </p>
                                <span className="price">₹ 50</span>
                              </div>
                              <div className="item_price">
                                <p>Total</p>
                                <span className="price">₹ 12,565</span>
                              </div>
                          </div>
                        </div>
                    </figcaption>
                    <button type="button" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bag-product-wrsvn">
                    <figure>
                      <Link href="">
                        <img src="/assets/images/other/img1.jpg" alt="Product Image" width="107" height="142" />
                      </Link>
                    </figure>
                    <figcaption>
                        <h6 className="title-tznlw">Black Formal Blazer For Men</h6>
                        <div className="sizes_wrapper">
                            <QuantityInput
                              classname="cart_size"
                              size="XS"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="S"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="M"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="L"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="2XL"
                            />
                            <QuantityInput
                              classname="cart_size"
                              size="3XL"
                            />
                        </div>
                        <div className="total_price">
                          <div className="emb_sec">
                            <p>Embroidery </p>
                            <Image src="/assets/images/checkout/emb_logo.png" width="128" height="47" alt="Embroidery Logo"></Image>
                          </div>
                          <div className="price_sec">
                              <div className="item_price">
                                <p>Item Price</p>
                                <span className="price">₹ 2,513.00</span>
                              </div>
                              <div className="item_price">
                                <p>Quantity</p>
                                <span className="price">350</span>
                              </div>
                              <div className="item_price">
                                <p>Embroidery </p>
                                <span className="price">₹ 50</span>
                              </div>
                              <div className="item_price">
                                <p>Total</p>
                                <span className="price">₹ 12,565</span>
                              </div>
                          </div>
                        </div>
                    </figcaption>
                    <button type="button" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="colB-flex-hfmcf">
              <div className="coupon-nvixw">
                <div className="tlt-vcfrm">Coupons</div>
                <div className="cupn-hjgn">
                  <input
                    type="text"
                    className="inpt-ixs"
                    placeholder="Enter coupon code"
                  />
                  <button type="button" className="btn gray_border">
                    apply
                  </button>
                </div>
                <p className="invalid-coupn">Invalid Coupon!</p>
              </div>
              <CheckoutSummary
                classname="cart_summ"
                summaryItems={summaryItems}
                totalAmount="₹37,100"
                button="Place Order"
                buttonHref="/address"
              />
            </div>
          </div>
          <div className="btm-check-out-cwgln">
            <div className="container">
                <ul className="bank-list">
                  <li>
                    <Image src="/assets/images/checkout/american-express.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/bhim-upi.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/cod.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/dc-bank.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/master-card.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/net-banking.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/paypal.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/rupay.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/visa.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
