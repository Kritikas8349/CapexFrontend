import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function GetSupport() {
    const [navigation,SetNavigation]=useState()
    const navigate = useNavigate()
  return (
    <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100 ">
            {/* Title */}


            {/* Navigation + Filters */}
            <div className="row align-items-center justify-content-between g-2 mb-2 py-md-3 py-lg-3">
                {/* Tabs Section */}
                <div className="d-flex justify-content-between">
                    <h3>Support Tickets</h3>
                    <Link to="/open-ticket" className='btn btn-nav'>+  New Ticket</Link>
                </div>
            </div>

            {/* Table / Empty Section */}
            <div className=" rounded-3  py-3 text-center  table-data">
                <div className="row  fw-semibold  pb-2 mb-3 d-none d-lg-flex">
                   <h6 className="col">Subject</h6>
                    <h6 className="col">Status</h6>
                    <h6 className="col">Priority</h6>
                    <h6 className="col">Last Reply</h6>
                    <h6 className="col">Actions</h6>

                </div>

                <div className="py-5">
                    <img
                        src="emptybox.png"
                        alt="Empty Orders"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "120px", opacity: 0.8 }}
                    />
                    <p className="text-dark">No support ticket found </p>
                </div>
            </div>
        </div>
  )
}

export default GetSupport