"use client"
import Image from "next/image";
import "../../../styles/dashboard/dashboard.css"
import { useState } from "react";
import DashBoard from "@/components/Dashboard";
import AddressPop from "@/components/AddressPop";
import { useModalStore } from "@/store/modalStore";

export default function Profile() {
    const openAddress = useModalStore((state) => state.openAddress)
    const [filename, setFileName] = useState(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setFileName(file.name);
        } else {
        setFileName("Choose file");
        }
    };
  return (
    <>
      <div className="dashboard-secA mt-hdrfxd">
      <div className="container">
        <div className="flex">
          <DashBoard />
          <div className="aside-right">
            <div className="aside-right-wrap">
              <h4 className="form-title">My Profile</h4>
              <div className="form form-grid">
                <div className="form-group">
                  <input type="text" className="form-control" />
                  <label htmlFor="">Name</label>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" />
                  <label htmlFor="">Last Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                  />
                  <label htmlFor="">Phone</label>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" />
                  <label htmlFor="">Email</label>
                </div>
                <div className="form-group full">
                  <textarea
                    className="form-control"
                  />
                  <label htmlFor="">Address</label>
                </div>
                <div className="profile_pic">
                    <p>Profile Picture</p>
                    <div className="form-group file-group">
                        <input type="file" className="form-control" onChange={handleFileChange} />
                        <p>{filename ? filename : "Choose file"}</p>
                    </div>
                </div>
                <div className="submit-grp full text-left">
                  <button type="button" className="btn black_fill">
                    update profile
                  </button>
                </div>
              </div>
              <div className="delivery_add">
                <div className="title">
                  <h6 className="form-title">Delivery Address</h6>
                  <button type="button" className="btn gray_border" onClick={openAddress}>
                    <span className="sm-none">Add New Address</span>
                    <span className="sm-block">Add Address</span>
                  </button>
                </div>
                <div className="add_wrapper">
                  <div className="address">
                    <div className="icon"><Image src="/assets/icon/location.svg" width="30" height="30" alt="Location Icon"></Image></div>
                    <div className="content">
                      <p className="title">Billing Address</p>
                      <p>Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana</p>
                      <div className="btn_wrap">
                        <button type="button" className="remove">remove</button>
                        <button type="button" className="edit">Edit</button>
                      </div>
                    </div>
                  </div>
                  <div className="address">
                    <div className="icon"><Image src="/assets/icon/location.svg" width="30" height="30" alt="Location Icon"></Image></div>
                    <div className="content">
                      <p className="title">Billing Address</p>
                      <p>Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana</p>
                      <div className="btn_wrap">
                        <button type="button" className="remove">remove</button>
                        <button type="button" className="edit">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddressPop />
    </>
  );
}
