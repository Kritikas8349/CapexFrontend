import React from 'react'

function TradeHistory() {
    return (
        <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100 ">
            {/* Title */}


            {/* Navigation + Filters */}
            <div className="row align-items-center g-2 mb-2 py-md-3 py-lg-3">
                {/* Tabs Section */}
                <div className="col-12 col-md-6 ">
                    <h2 className="fw-semibold  text-start text-md-start text-lg-start">
                        Trading History
                    </h2>
                </div>

                {/* Filters Section */}
                <div className="col-12 col-md-6   ">
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end">
                        <select className="form-select form-select-sm dashboard-container  text-dark border-dark">
                            <option>Order Type</option>
                            <option>All</option>
                            <option>Limit</option>
                            <option>Market</option>
                        </select>

                       

                        <div class="input-group w-50 ">
                            <input type="text" class="form-control bg-transparent border-dark text-dark custom-placeholder" placeholder="Pair,coin....." aria-label="Recipient’s username with two button addons" />

                            <button class="btn btn-outline-dark bi bi-search p-0 px-2" type="button"></button>
                        </div>


                    </div>
                </div>
            </div>

            {/* Table / Empty Section */}
            <div className=" rounded-3  py-3 text-center  table-data">
                <div className="row  fw-semibold  pb-2 mb-3 d-none d-lg-flex">
                    <h6 className="col">Orer Date | Pair</h6>
                    <h6 className="col">Trade Date</h6>
                    <h6 className="col">Trade Side</h6>
                    <h6 className="col">Rate</h6>
                    <h6 className="col">Ammount</h6>
                   
                </div>

                <div className="py-5">
                    <img
                        src="emptybox.png"
                        alt="Empty Orders"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "120px", opacity: 0.8 }}
                    />
                    <p className="text-dark">No orders found </p>
                </div>
            </div>
        </div>
    )
}

export default TradeHistory