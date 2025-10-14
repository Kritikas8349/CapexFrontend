import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OpenTicket() {
    const [showfile, setShowFile]= useState(false)
    const navigate = useNavigate()
  return (
    <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100 ">
            {/* Title */}
           <div className="row align-items-center justify-content-between g-2 mb-2 py-md-3 py-lg-3">
                {/* Tabs Section */}
                <div className="d-flex justify-content-between">
                    <h3>Ticket</h3>
                    <button className='btn btn-nav'> # My Tickets</button>
                </div>
            </div>

            {/* Navigation + Filters */}
            <div className="row align-items-center g-4 rounded rounded-2 text-start m-2 py-md-3 py-lg-3 table-data">
                {/* Tabs Section */}
                <div className="col-6">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Name
                    </label>
                    <input
                        type="text"
                        id="transactionNumber"
                        className="form-control bg-transparent border border-2 bg-transparent"
                        placeholder="Email..."
                    />
                </div>
                <div className="col-6">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Email
                    </label>
                    <input type="email" name="" id="transactionNumber" className='form-control bg-transparent border border-2' />
                </div>   
                <div className="col-6">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Subject
                    </label>
                    <input type="email" name="" id="transactionNumber" className='form-control bg-transparent border border-2' />
                </div> 
                <div className="col-6">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Priority
                    </label>
                    <select name="" id="transactionNumber" className='form-control bg-transparent border border-2 form-select'>High
                        <option value="">High</option>
                        <option value="">Mid</option>
                        <option value="">Low</option>
                        
                    </select>
                </div>  
                <div className="col-12">
                    <label htmlFor="transactionNumber" className="form-label h5">
                        Message
                    </label>
                    <textarea name="" id="transactionNumber" className='form-control bg-transparent border border-2'></textarea>
                </div>  
                <div className="d-flex justify-content-between">
                    <div className="">
                    <button className='btn btn-nav ' onClick={() => setShowFile(true)}> + Attachment</button>
                </div> 
                <div className="">
                    <button className='btn btn-nav' > Submit</button>

                </div> 
                </div> 
                <small>Max 5 files can be uploaded | Maximum upload size is 128MB | Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx</small>
                <div>
                    <input type="file" name="" id=""  className={`${showfile?'d-flex':'d-none'}`}/>
                </div>
                                  
            </div>
            

            
        </div>
  )
}

export default OpenTicket