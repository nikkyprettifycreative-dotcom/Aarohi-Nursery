"use client"
import "../../../styles/dashboard/dashboard.css"
import DashBoard from "@/components/Dashboard";
import Link from "next/link";
import MySelect from "@/components/MySelect";
import { useState } from "react";
import DateRangeFilter from "@/components/DateRange";

const statusData = [
    { value: "Delivered", label: "Delivered"},
    { value: "Pending", label: "Pending"},
    { value: "Shipped", label: "Shipped"},
]

export default function Profile() {
    const [status, setStatus] = useState(null)
  return (
    <>
      <div className="dashboard-secA order-secA mt-hdrfxd">
      <div className="container">
        <div className="flex">
          <DashBoard />
          <div className="aside-right order-right">
            <div className="aside-right-wrap">
              <div className="title order_title">
                <h3 className="form-title">My Orders</h3>
                <div className="filter_options">
                    <p>Filter by</p>
                    <MySelect
                        id="status-select"
                        placeholder="Status"
                        options={statusData}
                        selectedValue={status}
                        onValueChange={setStatus}
                        styles={{
                            control: (base, state) => ({
                            ...base,
                            width: "100%",
                            height: "30px",
                            minHeight: "30px",
                            color: "#fff",
                            backgroundColor: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            border: state.isFocused ? "1px solid #666" : "1px solid #666666",
                            boxShadow: "none",
                            '&:hover': {
                                borderColor: '#000'
                                }
                            }),
                            valueContainer: (base, state) => ({
                                ...base,
                                height: "25px", // ⬅ updated
                                padding: "0 8px",
                                color: "#000",
                            }),
                            input: (base, state) => ({
                                ...base,
                                width: "100%",
                                height: "25px", // ⬅ updated
                                minHeight: "25px", // ⬅ enforced
                                minWidth: "100%",
                                padding: 0,
                                color: "#000",
                                margin: 0,
                            }),
                            placeholder: (base, state) => ({
                                ...base,
                                color: "#666",
                                fontFamily: 'Lato',
                                fontSize: "13px"
                            }),
                            option: (base, state) => ({
                                ...base,
                                width: "100%",
                                background: "#fff",
                                marginBottom: "3px",
                                fontSize: "14px",
                                padding: "2px 10px",
                                color: "#000",
                                "&:hover": {
                                background: "#000",
                                color: "#fff"
                                }
                            }),
                            singleValue: (base, state) => ({
                                ...base,
                                color: "#000",
                                fontSize: "13px", // Optional: match placeholder
                                lineHeight: "25px", // vertically center
                            }),
                            indicatorsContainer: (base, state) => ({
                                ...base,
                                height: "25px",
                            }),
                            dropdownIndicator: (base, state) => ({
                                ...base,
                                padding: "0 4px",
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                            }),
                            menu: (base) => ({
                                ...base,
                                zIndex: 10,
                            }),
                            }}
                        />
                    <DateRangeFilter />
                </div>
              </div>
              <div className="order_list">
                <div className="order_item">
                    <div className="order_id">
                        <p className="id">1252562859</p>
                        <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_content">
                        <div className="upper_content">
                            <div className="order_name">
                                <p className="name">Black Formal Blazer For Men</p>
                                <p className="price">₹ 2,513.00</p>
                            </div>
                            <div className="btn_wrap">
                                <Link href="" className="btn gray_border">
                                    <span className="sm-none">Download Invoice</span>
                                    <span className="sm-block">Invoice</span>
                                </Link>
                                <Link href="/order-detail" className="btn black_fill">View Details</Link>
                            </div>
                        </div>
                        <div className="trans_details">
                            <p>Txn ID : <span>22525222</span></p>
                            <p>Status : <span>Pending</span></p>
                            <p>Order Date : <span>24, June 2025</span></p>
                            <p className="total_price">Total Price : <span>₹ 8000.00</span></p>
                        </div>
                    </div>
                </div>
                <div className="order_item">
                    <div className="order_id">
                        <p className="light-green id">Delivered</p>
                        <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_content">
                        <div className="upper_content">
                            <div className="order_name">
                                <p className="name">Black Formal Blazer For Men</p>
                                <p className="price">₹ 2,513.00</p>
                            </div>
                            <div className="btn_wrap">
                                <Link href="" className="btn gray_border">
                                    <span className="sm-none">Download Invoice</span>
                                    <span className="sm-block">Invoice</span>
                                </Link>
                                <Link href="" className="btn black_fill">View Details</Link>
                            </div>
                        </div>
                        <div className="trans_details">
                            <p>Txn ID : <span>22525222</span></p>
                            <p>Status : <span>Pending</span></p>
                            <p>Order Date : <span>24, June 2025</span></p>
                            <p className="total_price">Total Price : <span>₹ 8000.00</span></p>
                        </div>
                    </div>
                </div>
                <div className="order_item">
                    <div className="order_id">
                        <p className="light-green id">Delivered</p>
                        <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_content">
                        <div className="upper_content">
                            <div className="order_name">
                                <p className="name">Black Formal Blazer For Men</p>
                                <p className="price">₹ 2,513.00</p>
                            </div>
                            <div className="btn_wrap">
                                 <Link href="" className="btn gray_border">
                                    <span className="sm-none">Download Invoice</span>
                                    <span className="sm-block">Invoice</span>
                                </Link>
                                <Link href="" className="btn black_fill">View Details</Link>
                            </div>
                        </div>
                        <div className="trans_details">
                            <p>Txn ID : <span>22525222</span></p>
                            <p>Status : <span>Pending</span></p>
                            <p>Order Date : <span>24, June 2025</span></p>
                            <p className="total_price">Total Price : <span>₹ 8000.00</span></p>
                        </div>
                    </div>
                </div>
                <div className="order_item">
                    <div className="order_id">
                        <p className="light-green id">Delivered</p>
                        <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_content">
                        <div className="upper_content">
                            <div className="order_name">
                                <p className="name">Black Formal Blazer For Men</p>
                                <p className="price">₹ 2,513.00</p>
                            </div>
                            <div className="btn_wrap">
                                 <Link href="" className="btn gray_border">
                                    <span className="sm-none">Download Invoice</span>
                                    <span className="sm-block">Invoice</span>
                                </Link>
                                <Link href="" className="btn black_fill">View Details</Link>
                            </div>
                        </div>
                        <div className="trans_details">
                            <p>Txn ID : <span>22525222</span></p>
                            <p>Status : <span>Pending</span></p>
                            <p>Order Date : <span>24, June 2025</span></p>
                            <p className="total_price">Total Price : <span>₹ 8000.00</span></p>
                        </div>
                    </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
