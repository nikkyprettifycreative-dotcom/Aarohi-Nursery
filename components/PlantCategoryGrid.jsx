"use client"
import Link from "next/link"
import PlantGridItem from "./PlantGridItem"

export default function PlantCategoryGrid({ 
    heading = "Our Plants", 
    viewAllHref = "/product-listing",
    viewAllText = "View All",
    plants = [] 
}) {
    return (
        <section className="plant_category_grid sec-pad">
            <div className="container-fluid">
                <div className="heading center">
                    <h2>{heading}</h2>
                </div>
                <div className="plant_grid">
                    {plants.map((plant, i) => (
                        <PlantGridItem
                            key={i}
                            imgSrc={plant.imgSrc}
                            proName={plant.proName}
                            price={plant.price}
                            href={plant.href}
                        />
                    ))}
                </div>
                <div className="btn_wrapper">
                    <Link href={viewAllHref} className="btn black">
                        {viewAllText}
                    </Link>
                </div>
            </div>
        </section>
    )
}