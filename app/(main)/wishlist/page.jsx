import Image from "next/image";
import "../../../styles/dashboard/dashboard.css"
import DashBoard from "@/components/Dashboard";
import Link from "next/link";
import WishlistPro from "@/components/WishlistPro";

export default function Wishlist() {
  return (
    <>
      <div className="dashboard-secA mt-hdrfxd">
      <div className="container">
        <div className="flex">
          <DashBoard />
          <div className="aside-right">
            <div className="aside-right-wrap wish-grid">
              <WishlistPro
                imgSrc="/assets/images/other/img1.jpg"
                proName="Black Formal Blazer For Men"
                price="₹ 2,513.00"
              />
              <WishlistPro
                imgSrc="/assets/images/other/img1.jpg"
                proName="Black Formal Blazer For Men"
                price="₹ 2,513.00"
              />
              <WishlistPro
                imgSrc="/assets/images/other/img1.jpg"
                proName="Black Formal Blazer For Men"
                price="₹ 2,513.00"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
