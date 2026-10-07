"use client"
import "../../../styles/dashboard/dashboard.css"
import DashBoard from "@/components/Dashboard";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-secA mt-hdrfxd">
        <div className="container">
          <div className="flex">
            <DashBoard />
            <div className="aside-right">
              <div className="aside-right-wrap">
                <h4 className="form-title mb-20">My Dashboard</h4>
                <div className="dashboard_wrapper">
                  <div className="dashboard_col">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                        ></path>
                      </svg>
                    </div>
                    <div className="info">
                      <p>Total Order</p>
                      <span>920</span>
                    </div>
                  </div>
                  <div className="dashboard_col">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                        ></path>
                      </svg>
                    </div>
                    <div className="info">
                      <p>Total Complete Order</p>
                      <span>920</span>
                    </div>
                  </div>
                  <div className="dashboard_col">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"
                        ></path>
                      </svg>
                    </div>
                    <div className="info">
                      <p>Total Products</p>
                      <span>920</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard_grid">
                    <h4 className="form-title mb-20">Customer Data</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Role</th>
                        <th>Email Id</th>
                        <th>Mobile Number</th>
                        <th>No. of Orders</th>
                        <th>Registration Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Aditya</td>
                        <td>Frontend Developer</td>
                        <td>email@gmail.com</td>
                        <td>9998887771</td>
                        <td>200</td>
                        <td>30/08/2025</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="form-title mb-20">Recent Orders</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
