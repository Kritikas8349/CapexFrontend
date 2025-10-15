import React from 'react'

function TransactionHistory() {
    return (
        <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100 ">
            {/* Title */}
            <h2 className="fw-semibold  text-start text-md-start my-4 text-lg-start">
                Transactions
            </h2>

            {/* Navigation + Filters */}
            <div className="row align-items-center g-4 rounded rounded-2 text-start m-2 py-md-3 py-lg-3 table-data">
                {/* Tabs Section */}
                <div className="col">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Transaction Number
                    </label>
                    <input
                        type="text"
                        id="transactionNumber"
                        className="form-control "
                        placeholder="Enter transaction number"
                    />
                </div>
                <div className="col">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Currency
                    </label>
                    <select name="" id="transactionNumber" className='form-control form-select'>All
                        <option value="">All</option>
                        <option value="">BTC</option>
                        <option value="">EUR</option>
                        <option value="">ETH</option>
                        <option value="">INR</option>
                        
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Type
                    </label>
                    <select name="" id="transactionNumber" className='form-control form-select'>All
                        <option value="">All</option>
                        <option value="">BTC</option>
                        <option value="">EUR</option>
                        <option value="">ETH</option>
                        <option value="">INR</option>
                        
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Remark
                    </label>
                    <select name="" id="transactionNumber" className='form-control form-select'>All
                        <option value="">All</option>
                        <option value="">BTC</option>
                        <option value="">EUR</option>
                        <option value="">ETH</option>
                        <option value="">INR</option>
                        
                    </select>
                </div>


                {/* Filters Section */}
                <div className="col">
                    <button className='btn btn-nav bi bi-filter mt-4 w-100 fs-5 '>Filter</button>
                </div>
            </div>

            {/* Table / Empty Section */}
            <div className=" rounded-3  py-3 text-center  table-data">
                <div className="row  fw-semibold  pb-2 mb-3 d-none d-lg-flex">
                    <h6 className="col">Currency | Wallet</h6>
                    <h6 className="col">	Gateway | Transaction</h6>
                    <h6 className="col">Initiated</h6>
                    <h6 className="col">Amount</h6>
                    <h6 className="col">Status</h6>
                    <h6 className="col">Action</h6>

                </div>

                <div className="py-5">
                    <img
                        src="emptybox.png"
                        alt="Empty Orders"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "120px", opacity: 0.8 }}
                    />
                    <p className="text-dark">No transaction history found </p>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory