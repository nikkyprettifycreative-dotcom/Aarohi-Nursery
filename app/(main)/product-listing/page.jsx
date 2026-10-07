"use client"
import ProductCol from "@/components/ProductCol";
import "../../../styles/product/product.css"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Range } from 'react-range';
import { useModalStore } from "@/store/modalStore";


const MIN = 0;
const MAX = 10000;

const categoryOptions = [
  { id: 1, name: 'Indoor Plants' },
  { id: 2, name: 'Outdoor Plants' },
  { id: 3, name: 'Flowering Plants' },
  { id: 4, name: 'Medicinal & Herbal' },
  { id: 5, name: 'Cactus & Succulents' },
  { id: 6, name: 'Seeds & Bulbs' },
  { id: 7, name: 'Pots & Planters' },
];

const subcategoryOptions = [
  { id: 101, name: 'Air Purifying Plants' },
  { id: 102, name: 'Low Light Plants' },
  { id: 103, name: 'Table Top Plants' },
  { id: 104, name: 'Hanging Plants' },
  { id: 105, name: 'Bonsai Plants' },
  { id: 106, name: 'Feng Shui Plants' },
];

const genderOptions = [
    {id: 201, name: 'Small (6-12 inch)'},
    {id: 202, name: 'Medium (12-24 inch)'},
];

const sortOptions = [
  { id: 301, name: 'A to Z' },
  { id: 302, name: 'Z to A' },
  { id: 303, name: 'Low to High' },
  { id: 304, name: 'High to Low' },
];

export default function ProductListing() {
    const [price, setPrice] = useState([0, 10000]);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [subcategoryOpen, setSubcategoryOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false)
    const [genderOpen, setGenderOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [openFilterClass, setOpenFilterClass] = useState(false);
    const isOpenFilter = useModalStore((state) => state.isFilterOpen)
    const openFilter = useModalStore((state) => state.openFilter)
    const closeFilter = useModalStore((state) => state.closeFilter)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedSort, setSelectedSort] = useState([]);

    const categoryRef = useRef(null);
    const subcategoryRef = useRef(null);
    const priceRef = useRef(null);
    const genderRef = useRef(null);
    const sortRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
      if (subcategoryRef.current && !subcategoryRef.current.contains(e.target)) {
        setSubcategoryOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(e.target)){
        setPriceOpen(false)
      }
      if (genderRef.current && !genderRef.current.contains(e.target)) {
        setGenderOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleCategoryChange = (id) => {
        setSelectedCategories(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSubcategoryChange = (id) => {
        setSelectedSubcategories(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };
    const handlePriceRange = (range) => {
      setPrice(range)
    }
    const handleGenderChange = (id) => {
        setSelectedGender(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };
    const handleSortChange = (id) => {
        setSelectedSort(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    useEffect(() => {
      const checkViewport = () => {
        setOpenFilterClass(window.innerWidth < 991);
      };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
    }, [])

    return (
      <main>
        <div className="prolisting-secA sec-pad mt-hdrfxd">
          <div className="container">
            <div className="heading">
              <h2>Indoor Plants</h2>
              <p>
                Bring Nature Into Your Home With Our Fresh, Healthy Indoor Plants.
                Air-purifying, Low-maintenance & Beautifully Grown For Every Space.
              </p>
            </div>
          </div>
        </div>
        <div className="list-filter-wrap">
          <div className="container">
            <div className="list-filter">
              <div className="colA" data-model=".list-filter-wrap .colB">
                <button type="button" className="filtr-btn" onClick={openFilter}>
                  <img src="assets/icon/sort.svg" className="svg" alt="" />
                </button> 
              </div>
              <div className={`colB ${openFilterClass ? 'model' : ""} ${isOpenFilter ? 'is-open' : ''}`}>
                <div className="fltr-ggf">
                  <div className={`kmr-select-wrap cat_select ${selectedCategories.length > 0 ? 'active' : ''}`} ref={categoryRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); 
                      if(window.innerWidth > 991){
                        setCategoryOpen(prev => !prev);
                      }
                     }}>Category</div>
                    <ul className={`kmr-select-menu ${categoryOpen ? 'active' : ''}`}>
                      {categoryOptions.map(option => (
                        <li key={option.id}>
                        <div className="in-bx" />
                        <span>{option.name}</span>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(option.id)}
                            onChange={() => handleCategoryChange(option.id)}
                        />
                        </li>
                    ))}
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap subcat_select ${selectedSubcategories.length > 0 ? 'active' : ''}`} ref={subcategoryRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); {
                      if(window.innerWidth > 991){
                        setSubcategoryOpen(prev => !prev); }
                      }
                    }}>Indoor Plants</div>
                    <ul className={`kmr-select-menu ${subcategoryOpen ? 'active' : ''}`}>
                      {subcategoryOptions.map(option => (
                        <li key={option.id}>
                        <div className="in-bx" />
                        <span>{option.name}</span>
                        <input
                            type="checkbox"
                            checked={selectedSubcategories.includes(option.id)}
                            onChange={() => handleSubcategoryChange(option.id)}
                        />
                        </li>
                    ))}
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap price_select ${price.length ? 'active': ''}`} ref={priceRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); 
                      if(window.innerWidth > 991){
                        setPriceOpen(prev => !prev);
                      }
                     }}>Price</div>
                    <ul className={`kmr-select-menu ${priceOpen ? 'active' : ''}`}>
                      <div className="upper-sec">
                        <h6>Price Range</h6>
                        <button type="button" className="reset-btn"  onClick={() => setPrice([MIN, MAX])}>
                          Reset
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                          >
                            <g
                              fill="none"
                              fillRule="evenodd"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
                              <path d="M7.5 6.5h-4v-4" />
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div className="product-price-range">
                        <div className="product-range-slider-range">
                            <Range
                              step={100}
                              min={MIN}
                              max={MAX}
                              values={price}
                              onChange={handlePriceRange}
                              renderTrack={({ props, children }) => (
                                <div {...props} style={{ ...props.style, height: '3px', background: '#000', margin: '30px 10px', borderRadius: '5px' }}>
                                  {children}
                                </div>
                              )}
                              renderThumb={({ props }) => {
                                const { key, ...rest } = props;
                                return(
                                  <div key={key} {...rest} style={{ ...props.style, height: '20px', width: '20px', backgroundColor: '#000', borderRadius: '50%', outline: 'none' }} />
                                )
                              }}
                            />
                        </div>
                        <div className="price-range-input-wrap">
                           <div className="price-range-input">
                            <span>&#8377;</span>
                            {price[0]}
                          </div>
                          <p>to</p>
                          <div className="price-range-input">
                            <span>&#8377;</span>
                            {price[1]}
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap gender-select ${selectedGender.length > 0 ? "active" : ""}`} ref={genderRef}>
                    <div className="label" onClick={(e) => {e.stopPropagation(); 
                      if(window.innerWidth > 991){
                        setGenderOpen(prev => !prev);
                      }
                    }}>Size</div>
                    <ul className={`kmr-select-menu ${genderOpen ? 'active' : ''}`}>
                        {genderOptions.map(option => (
                            <li key={option.id}>
                                <div className="in-bx" />
                                <span>{option.name}</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={selectedGender.includes(option.id)}
                                    onChange={() => handleGenderChange(option.id)}
                                />
                            </li>
                        ))}
                    </ul>
                  </div>
                  <div className="btn-mbl-btm">
                    <button className="btn black_fill" type="button" onClick={closeFilter}>
                      Apply
                    </button>
                    <button className="btn gray_fill" type="button" onClick={closeFilter}>
                      Clear
                    </button>
                  </div>
                </div>
                {openFilterClass && (
                  <button type="button" className="close" onClick={closeFilter}>
                    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </button>
                )}
              </div>
              <div className="colC">
                <div className={`kmr-select-wrap sort_by slt-rgt ${selectedSort.length > 0 ? "active" : ''}`} ref={sortRef}>
                  <div className="label" onClick={(e) => {e.stopPropagation(); setSortOpen(prev => !prev);}}>Sort By</div>
                  <ul className={`kmr-select-menu ${sortOpen ? 'active' : ''}`}>
                    {sortOptions.map(option => (
                        <li key={option.id}>
                            <div className="in-bx" />
                            <span>{option.name}</span>
                            <input
                                type="checkbox"
                                checked={selectedSort.includes(option.id)}
                                onChange={() => handleSortChange(option.id)}
                            />
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total_products">
            <div className="container">
                <p>104 Products</p>
                <div className="selected_pro_wraper">
                    {selectedCategories.map((id) => {
                      const name = categoryOptions.find(opt => opt.id === id)?.name
                      return(
                        <div key={`cat-${id}`} className="selected">
                          {name}
                          <Image src="/assets/icon/cross.svg" width="15" height="15" alt="Remove" onClick={() =>
                            setSelectedCategories(prev => prev.filter(i => i !== id))
                          }></Image>
                        </div>
                      )
                    })}
                    {selectedSubcategories.map((id) => {
                      const name = subcategoryOptions.find(opt => opt.id === id)?.name
                      return(
                        <div key={`subcat-${id}`} className="selected">
                          {name}
                          <Image src="/assets/icon/cross.svg" width="15" height="15" alt="Remove" onClick={() =>
                            setSelectedSubcategories(prev => prev.filter(i => i !== id))
                          }></Image>
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
        <div className="proListing_grid_wrapper sec-pad">
            <div className="container">
                <div className="proListing_grid">
                    <ProductCol
                        imgSrc="/assets/images/product/areca.jpg"
                        proName="Areca Palm"
                        price="₹ 399.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/snake.jpg"
                        proName="Snake Plant"
                        price="₹ 299.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/money.jpg"
                        proName="Money Plant"
                        price="₹ 249.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/peace.jpg"
                        proName="Peace Lily"
                        price="₹ 449.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/zz.jpg"
                        proName="ZZ Plant"
                        price="₹ 549.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/areca.jpg"
                        proName="Rubber Plant"
                        price="₹ 399.00"
                    />
                </div>
                <button type="button" className="load_more">
                    <Image src="/assets/icon/logo.svg" width="65" height="65" alt="Load More"></Image>
                    Load More..
                </button>
            </div>
        </div>
      </main>
    );
}