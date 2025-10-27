import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReplyTicket() {
  const [showFile, setShowFile] = useState(false);

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container h-100">
      {/* Header Section */}
      <div className="row align-items-center justify-content-between g-3 mb-3">
        <div className="col-12 col-lg-8 d-flex flex-wrap align-items-center gap-2">
         
          <span className="h5 text-secondary mb-0">OPEND : [Ticket #370410] Support Query</span>
        </div>

        <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-lg-end gap-2 mt-2 mt-lg-0">
          <Link to="/open-ticket" className="btn btn-outline-danger fw-semibold">
            Close Ticket
          </Link>
          <Link to="/open-ticket" className="btn btn-nav fw-semibold">
            + New Ticket
          </Link>
        </div>
      </div>

      {/* Message Input Section */}
      <div className="rounded-3 p-3 p-md-4 table-data bg-transparent text-start">
        <label htmlFor="message" className="form-label fw-semibold fs-5">
          Message
        </label>
        <textarea
          id="message"
          className="form-control bg-transparent border border-1"
          rows={5}
          placeholder="Type your reply here..."
        ></textarea>

        {/* Action Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center py-3 gap-3">
          <button className="btn btn-primary fw-semibold" onClick={() => setShowFile(true)}>
            <i className="bi bi-paperclip me-2"></i> Add Attachment
          </button>

          <button className="btn btn-nav fw-semibold">
            <i className="bi bi-reply-all me-2"></i> Reply
          </button>
        </div>

        {/* Upload Info */}
        <small className="text-muted d-block">
          Max 5 files can be uploaded | Max size: 128MB | Allowed: .jpg, .jpeg, .png, .pdf, .doc, .docx
        </small>

        {/* File Input */}
        {showFile && (
          <div className="mt-3">
            <input type="file" className="form-control" multiple />
          </div>
        )}
      </div>

      {/* Ticket Info Section */}
      <div className="rounded-3 table-data my-4 p-3 p-md-4 text-center text-md-start">
        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center border border-primary-subtle py-3 px-2 rounded-3">
          <h5 className="mb-2 mb-md-0 border-end border-dark pe-md-4 me-md-3 text-nowrap">
            Rohan Choudhary
          </h5>
          <h6 className="text-secondary text-center text-md-start">
            Posted on Monday, 13th October 2025 @ 06:05
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ReplyTicket;
