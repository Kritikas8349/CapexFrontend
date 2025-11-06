import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OpenTicket() {
  const [showFile, setShowFile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("High");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("priority", priority);
      formData.append("message", message);
      for (let i = 0; i < attachments.length; i++) {
        formData.append("attachments", attachments[i]);
      }

      const res = await axios.post("http://localhost:5000/api/tickets", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("✅ Ticket submitted successfully!");
        navigate("/get-support");
      } else {
        alert("❌ Something went wrong while submitting the ticket");
      }
    } catch (err) {
      console.error("Ticket submit error:", err);
      alert("Server error — check backend connection!");
    }
  };

  return (
    <div className="container-fluid border py-4 py-md-5 px-3 dashboard-container">
     <div className="mx-3">
       {/* Title Section */}
      <div className="row align-items-center justify-content-between g-2 mb-4 ">
        <div className="col-12 d-flex justify-content-between flex-wrap gap-2 my-3">
          <h3 className="mb-0 fw-bold text-heading">Open Ticket</h3>
          <button className="btn btn-nav" onClick={() => navigate("/get-support")}>
            # My Tickets
          </button>
        </div>
      </div>

      {/* Form Section */}
      <form
        className="row g-4 p-3 rounded-3 text-start bg-white bg-opacity-50"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control bg-transparent border border-1"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control bg-transparent border border-1"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Subject */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-semibold">Subject</label>
          <input
            type="text"
            className="form-control bg-transparent border border-1"
            placeholder="Subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        {/* Priority */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-semibold">Priority</label>
          <select
            className="form-select bg-transparent border border-1"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Mid">Mid</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Message */}
        <div className="col-12">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className="form-control bg-transparent border border-1"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-2">
          <button
            type="button"
            className="btn btn-nav"
            onClick={() => setShowFile(true)}
          >
            + Attachment
          </button>

          <button type="submit" className="btn btn-nav">
            Submit
          </button>
        </div>

        {/* Info Text */}
        <div className="col-12">
          <small className="text-muted">
            Max 5 files | Max size: 128MB | Allowed: .jpg, .jpeg, .png, .pdf, .doc, .docx
          </small>
        </div>

        {/* File Upload */}
        {showFile && (
          <div className="col-12">
            <input
              type="file"
              multiple
              onChange={(e) => setAttachments(e.target.files)}
              className="form-control bg-transparent border border-1"
            />
          </div>
        )}
      </form>
     </div>
    </div>

  );
}

export default OpenTicket;
