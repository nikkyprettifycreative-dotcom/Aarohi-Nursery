import Image from "next/image"
import "../../../styles/component/component.css"

export default function PayOnline(){
    return(
        <main>
            <div className="pay_online_wrapper flex mt-hdrfxd">
                <div className="colA banner">
                    <div className="bg">
                        <Image src="/assets/images/home/pay_online_banner.jpg" width="625" height="570" alt="Pay Online Image"></Image>
                        <div className="banner-wrapper">
                            <h1>Pay ONLINE</h1>
                            <p>Secure Payments at Your Fingertips</p>
                        </div>
                    </div>
                </div>
                <div className="colB">
                    <div className="form form-grid">
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Estimate No. / Order ID*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Amount*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Customer Name*</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" />
                            <label>Your Mobile No*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Company / Dealer Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" />
                            <label>Your Email*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Address*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Your City*</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label>Your State*</label>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" />
                            <label>PIN code*</label>
                        </div>
                        <div className="form-group full">
                            <textarea className="form-control" />
                            <label>Note</label>
                        </div>
                        <div className="btn_wrapper full">
                            <button type="submit" className="btn black_fill">Proceed to Payment</button>
                        </div>
                    </div>
                </div>
                <div className="ub_logo">
                    <Image src="/assets/icon/logo.svg" width="40" height="40" alt="UB Icon" />
                </div>
            </div>
        </main>
    )
}