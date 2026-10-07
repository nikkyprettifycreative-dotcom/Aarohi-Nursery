import Image from "next/image"
import Link from "next/link"

export default function CategoryItem({ imgSrc, heading, subHeading, href="/product-listing" }) {
    return (
        <Link href={href} className="category_col item-md">
            <figure>
                <img src={imgSrc} alt={heading} />
            </figure>
            <figcaption>
                <h6>{heading}</h6>
                <p>{subHeading}</p>
            </figcaption>
        </Link>
    )
}