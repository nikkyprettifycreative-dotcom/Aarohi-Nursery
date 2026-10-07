"use client"
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
    const isOpen = useModalStore((state) => state.isHamOpen)
    const closeHam = useModalStore((state) => state.closeHam)
    const [activeIndex, setActiveIndex] = useState(null);
    const menuItems = [
    {
      id: 1,
      title: 'Indoor Plants',
      subitems: [
        'Air Purifying Plants',
        'Low Light Plants',
        'Table Top Plants',
        'Floor Plants',
        'Hanging Plants',
        'Bonsai Plants',
        'Feng Shui Plants',
        'Pet-Friendly Plants',
      ],
    },
    {
      id: 2,
      title: 'Outdoor Plants',
      subitems: [
        'Flowering Plants',
        'Fruit Plants',
        'Shade Trees',
        'Hedges & Shrubs',
        'Climbers & Creepers',
        'Ground Covers',
        'Palm Trees',
        'Bamboo Plants',
      ],
    },
    {
      id: 3,
      title: 'Flowering Plants',
      subitems: [
        'Rose Plants',
        'Hibiscus',
        'Jasmine (Mogra)',
        'Bougainvillea',
        'Marigold',
        'Plumeria (Champa)',
        'Lotus',
        'Orchids',
      ],
    },
    {
      id: 4,
      title: 'Medicinal & Herbal',
      subitems: [
        'Tulsi (Holy Basil)',
        'Aloe Vera',
        'Curry Leaf (Kadi Patta)',
        'Mint (Pudina)',
        'Lemongrass',
        'Ashwagandha',
        'Brahmi',
        'Neem',
      ],
    },
    {
      id: 5,
      title: 'Seeds & Bulbs',
      subitems: [
        'Flower Seeds',
        'Vegetable Seeds',
        'Herb Seeds',
        'Fruit Seeds',
        'Grass Seeds',
        'Bulbs & Tubers',
        'Seed Kits',
        'Organic Seeds',
      ],
    },
    {
      id: 6,
      title: 'Pots & Planters',
      subitems: [
        'Ceramic Pots',
        'Terracotta Pots',
        'Plastic Pots',
        'Hanging Planters',
        'Self-Watering Pots',
        'Metal Planters',
        'Wooden Planters',
        'Wall Planters',
      ],
    },
    {
      id: 7,
      title: 'Garden Care',
      subitems: [
        'Potting Soil',
        'Fertilizers',
        'Organic Manure',
        'Neem Oil & Pesticides',
        'Plant Growth Boosters',
        'Watering Cans',
        'Pruning Tools',
        'Gardening Tools',
      ],
    },
  ];
    const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle on click
  };
  return (
    <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
      <button className="close" onClick={closeHam}>
        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="model-body">
        <div className="icon">
          <Image src="/assets/icon/logo.svg" width="50" height="50" className="svg" alt="icon" />
        </div>
        <ul className="nav-list">
            {menuItems.map((item, index) => (
                <li className="hamDropdown" key={item.id}>
                <div
                    className={`title ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <h5>{item.title}</h5>
                    <img
                    src="/assets/icon/next-black.svg"
                    alt={item.title}
                    className="svg arrow"
                    />
                </div>

                <div
                    className={`dropdown-menu-ham ${
                    activeIndex === index ? 'active' : ''
                    }`}
                >
                    <ul>
                    {item.subitems.map((sub, i) => (
                        <li key={i}>
                        <Link href="/product-listing" className="subcat-li-anchr" onClick={closeHam}>
                            {sub}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </li>
            ))}
        </ul>
        <div className="bottom-list">
          <div className="social-icons">
            <Link href="https://x.com" target="_blank" title="Twitter">
                <Image src="/assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://www.facebook.com" target="_blank" title="Facebook">
                <Image src="/assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" title="Instagram">
                <Image src="/assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://in.linkedin.com" target="_blank" title="Linkedin">
                <Image src="/assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://api.whatsapp.com" target="_blank" title="Whatsapp">
                <Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}