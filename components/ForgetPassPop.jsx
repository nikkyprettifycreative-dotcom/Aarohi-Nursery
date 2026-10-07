import { useModalStore } from "@/store/modalStore"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

export default function ForgetPassPop({length = 4, onComplete}){
    const isOpen = useModalStore((state) => state.isForgetPopOpen)
    const closeForgetPop = useModalStore((state) => state.closeForgetPop)
    const openSignUp = useModalStore((state) => state.openSignUp)
    const openLogin = useModalStore((state) => state.openLogin)
    const inputRefs = useRef([])

    const handleOtp = (e, index) => {
        const input = e.target;
        const value = input.value;
        const isValidInput = value.match(/[0-9a-z]/i);

        input.value = "";
        input.value = isValidInput ? value[0] : "";

        if(isValidInput && index < length -1){
            inputRefs.current[index + 1]?.focus();
        }
        if(e.key === "Backspace" && index > 0 && !input.value){
            inputRefs.current[index - 1]?.focus()
        }

        if(index === length - 1 && isValidInput){
            const otp = inputRefs.current.map((ref) => ref.value).join("");
            onComplete?.(otp);
        }
    }

    const handlePaste = (e)=> {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData("text");
        for (let i = 0; i < length; i++) {
        if (pasted[i]?.match(/[0-9a-z]/i)) {
            inputRefs.current[i].value = pasted[i];
            inputRefs.current[i].dispatchEvent(new Event("keyup", { bubbles: true }));
            }
        }
    }

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);
    return(
        <div className={`model ForgetPass-pop signUp-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" type="button" onClick={closeForgetPop}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <div className="title">
                    <div className="icon">
                        <Image src="/assets/icon/logo.svg" width="68" height="64" alt="Logo"></Image>
                    </div>
                    <h2>Forget Password</h2>
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" name="text"  className="form-control" />
                        <label htmlFor="text">Email Address</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="resend_code">
                        <div className="upper_resend">
                            <p>OTP Sent to 9998887771</p>
                            <button className="resend">Resend code</button>
                        </div>
                        <div className="otp_verify" onPaste={handlePaste}>
                            {[...Array(length)].map((_, index) => (
                                <input
                                key={index}
                                type="text"
                                maxLength={1}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onKeyUp={(e) => handleOtp(e, index)}
                                />
                            ))}
                            <button type="button" className="verify_btn">Verify</button>
                            <p className="verify">Invalid</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="password"  className="form-control" />
                        <label htmlFor="password">New Password</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="sbmt-btn-div">
                        <button type="button" className="btn black_round">Continue</button>
                    </div>
                </div>
                <div className="split-sec"><p>OR</p></div>
                <div className="btm-social-wrp">
                    <button type="button" className="btn google-btn" onClick={openLogin}>Sign In</button>
                    <button type="button" className="btn btn facebook-btn" onClick={openSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}