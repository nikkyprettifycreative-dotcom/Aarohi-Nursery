import { useModalStore } from "@/store/modalStore"
import Image from "next/image"
import Link from "next/link"
export default function ProductCol({imgSrc, proName, price}){
    const openEnquire = useModalStore((state) => state.openEnquire)
    return(
        <div className="product_col">
            <a href="/product-listing" className="figure">
                <Image src={imgSrc} width="344" height="439" alt="Product Image"></Image>
            </a>
            <figcaption>
                <h6>{proName}</h6>
                <p>{price}</p>
            </figcaption>
            <div className="hoverItem">
                <button className="enquireBtn" onClick={openEnquire}>Enquire Now</button>
                <Link href="/product-detail" className="viewDetails">View Details</Link>
            </div>
            <button className="wislist">
                <Image src="/assets/icon/like-black.svg" alt="Wislist Icon" width="20" height="20"></Image>
            </button>
        </div>
    )
}