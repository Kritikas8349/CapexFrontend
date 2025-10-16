import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ReplyTicket() {
    const [showfile, setShowFile] = useState()
    return (
        <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100 ">
            {/* Title */}


            {/* Navigation + Filters */}
            <div className="row align-items-center justify-content-between g-2 mb-2 py-md-3 py-lg-3">
                {/* Tabs Section */}
                <div className="d-flex justify-content-between">
                    <div>
                        <span className='btn deposit-btn'>Opend</span>
                        <span className='h5 text-secondary ms-2'>[Ticket#370410] f</span>
                    </div>
                    <div>
                        <Link to="/open-ticket" className='btn btn-outline-danger me-3'>Close Ticket</Link>
                        <Link to="/open-ticket" className='btn btn-nav'>+  New Ticket</Link>
                    </div>
                </div>
            </div>

            {/* Table / Empty Section */}
            <div className="container rounded-3  py-3 py-lg-5 py-md-5 text-start  table-data">
                <label htmlFor="transactionNumber" className="form-label h5">
                    Message
                </label>
                <textarea name="" id="transactionNumber" className='form-control bg-transparent border border-1' rows={5}></textarea>
                <div className="d-flex justify-content-between py-3 py-lg-5 py-md-5">
                    <div className="">
                        <button className='btn btn-primary ' onClick={() => setShowFile(true)}> + Attachment</button>
                    </div>
                    <div className="">
                        <button className='btn btn-nav bi bi-reply-all' > Reply</button>

                    </div>
                </div>
                <small className='py-3 py-lg-5 py-md-5'>Max 5 files can be uploaded | Maximum upload size is 128MB | Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx</small>
                <div className=''>
                    <input type="file" name="" id="" className={` py-3 ${showfile ? 'd-flex' : 'd-none'}`} />
                </div>
            </div>

            <div className="container rounded rounded-3 table-data my-3 p-4">
                <div className="d-flex justify-content-center border border-primary-subtle py-4">
                    <h4 className=' border-end border-black  text-end pe-4'>Rohan Choudhary</h4>
                    <h5 className='ms-3'>
Posted on Monday, 13th October 2025 @ 06:05</h5>
                </div>
            </div>
        </div>
    )
}

export default ReplyTicket