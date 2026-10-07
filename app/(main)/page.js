import HomeBanner from "@/components/HomeBanner";
import "../../styles/home/home.css"
import CategorySlider from "@/components/CategorySlider";
import ClientSlider from "@/components/ClientSlider";
import Image from "next/image";
import Link from "next/link";
import BestSellerSlider from "@/components/BestSellerSlider";
import CounterBanner from "@/components/CounterBanner";
import TestimonySlider from "@/components/TestimonySlider";
import AnimateSlider from "@/components/AnimateSlider";
import VideoPop from "@/components/VideoPop";
import HomeGlobe from "@/components/HomeGlobe";
import PlantCategoryGrid from "@/components/PlantCategoryGrid";
import "../../styles/plantCategoryGrid/plantCategoryGrid.css"

export default function Home() {
  return (
    <main>
     <HomeBanner />
     <CategorySlider classname="sec-pad" />
     <PlantCategoryGrid 
        heading="Indoor Plants"
        viewAllHref="/product-listing"
        viewAllText="View All Indoor Plants"
        plants={[
            { imgSrc: "/assets/images/product/areca.jpg", proName: "Areca Palm", price: "₹ 399.00" },
            { imgSrc: "/assets/images/product/snake.jpg", proName: "Snake Plant", price: "₹ 299.00" },
            { imgSrc: "/assets/images/product/money.jpg", proName: "Money Plant", price: "₹ 249.00" },
            { imgSrc: "/assets/images/product/peace.jpg", proName: "Peace Lily", price: "₹ 449.00" },
            { imgSrc: "/assets/images/product/zz.jpg", proName: "ZZ Plant", price: "₹ 549.00" },
            { imgSrc: "/assets/images/product/areca.jpg", proName: "Rubber Plant", price: "₹ 399.00" },
            { imgSrc: "/assets/images/product/snake.jpg", proName: "Spider Plant", price: "₹ 299.00" },
            { imgSrc: "/assets/images/product/money.jpg", proName: "Jade Plant", price: "₹ 349.00" },
        ]}
      />
      <PlantCategoryGrid 
        heading="Medicinal & Herbal Plants"
        viewAllHref="/product-listing"
        viewAllText="View All Medicinal Plants"
        plants={[
            { imgSrc: "/assets/images/category/medicinal.jpg", proName: "Tulsi (Holy Basil)", price: "₹ 199.00" },
            { imgSrc: "/assets/images/product/areca.jpg", proName: "Aloe Vera", price: "₹ 249.00" },
            { imgSrc: "/assets/images/product/snake.jpg", proName: "Curry Leaf (Kadi Patta)", price: "₹ 299.00" },
            { imgSrc: "/assets/images/product/money.jpg", proName: "Mint (Pudina)", price: "₹ 149.00" },
            { imgSrc: "/assets/images/product/peace.jpg", proName: "Lemongrass", price: "₹ 199.00" },
            { imgSrc: "/assets/images/product/zz.jpg", proName: "Ashwagandha", price: "₹ 399.00" },
            { imgSrc: "/assets/images/product/areca.jpg", proName: "Brahmi", price: "₹ 249.00" },
            { imgSrc: "/assets/images/product/snake.jpg", proName: "Neem", price: "₹ 349.00" },
        ]}
    />
  <PlantCategoryGrid 
      heading="Outdoor Plants"
      viewAllHref="/product-listing"
      viewAllText="View All Outdoor Plants"
      plants={[
          { imgSrc: "/assets/images/category/ground.jpg", proName: "Bougainvillea", price: "₹ 399.00" },
          { imgSrc: "/assets/images/category/ornamet.jpg", proName: "Hibiscus", price: "₹ 349.00" },
          { imgSrc: "/assets/images/category/creeper-climber.jpg", proName: "Jasmine (Mogra)", price: "₹ 299.00" },
          { imgSrc: "/assets/images/category/bamboo.jpg", proName: "Bamboo Plant", price: "₹ 449.00" },
          { imgSrc: "/assets/images/product/areca.jpg", proName: "Areca Palm", price: "₹ 399.00" },
          { imgSrc: "/assets/images/product/snake.jpg", proName: "Snake Plant (Outdoor)", price: "₹ 329.00" },
          { imgSrc: "/assets/images/product/money.jpg", proName: "Money Plant", price: "₹ 249.00" },
          { imgSrc: "/assets/images/product/peace.jpg", proName: "Peace Lily", price: "₹ 449.00" },
      ]}
  />
     <BestSellerSlider heading="Best Sellers" />
     <CounterBanner 
      videoSrc="/assets/images/home/outdoor.mp4"
      heading="Why to Choose Us?"
      subHeading="Arohi Nursery is your trusted partner for premium quality plants, seeds, and gardening essentials. From indoor greens to outdoor landscapes, we bring nature closer to your home with fresh, healthy, and sustainably grown plants delivered across India."
      count1="50000"
      cnt1desc="Happy Gardeners"
      count2="500"
      cnt2desc="Plant Varieties"
      count3="10000"
      cnt3desc="Pin Codes Delivered"
      count4="100000"
      cnt4desc="Plants Delivered"
    />
    <div className="animate_banner banner">
      <div className="bg">
        <Image src="/assets/images/home/animate.webp" width="1280" height="730" alt="Featured Plants"></Image>
        <div className="banner-wrapper">
          <div className="container">
            <div className="content">
              <h2>Seasonal Picks</h2>
              <h6>Handpicked for this season</h6>
              <Link className="btn black" href="/product-listing">Explore All Plants</Link>
            </div>
            <AnimateSlider />
          </div>
        </div>
      </div>
    </div>

    

    <div className="promo-sec banner">
      <div className="bg">
        <video src="/assets/video/loading.mp4" autoPlay muted loop playsInline></video>
        <div className="banner-wrapper">
          <div className="container">
          <h2>The Plant You Approve Is the Plant That Loads</h2>
          <p>We send live photos & video of your plants on WhatsApp before dispatch — you approve, then we ship.</p>
            <Link href="/product-listing" className="btn">Shop Now </Link>
          </div>
        </div>
      </div>
     </div>



     
     {/* <ClientSlider /> */}

     {/* <div className="home-secA sec-pad">
        <div className="container-fluid">
            <div className="heading">
                <h2>Shop By Profession</h2>
            </div>
            <div className="profession_grid grid">
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession1.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Air Hostess Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession2.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Pilot Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession3.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Nurse Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession4.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Sports Uniforms</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
            </div>
            <div className="btn_wrapper">
              <Link href="/product-listing" className="btn black">Explore All Products</Link>
            </div>
        </div>
     </div> */}
     {/* <TestimonySlider /> */}
     {/* <HomeGlobe /> */}
     <VideoPop />
    </main>
  );
}
