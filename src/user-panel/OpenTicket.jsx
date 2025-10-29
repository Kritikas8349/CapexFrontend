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
    <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100">
      {/* Title */}
      <div className="row align-items-center justify-content-between g-2 mb-2 py-md-3 py-lg-3">
        <div className="d-flex justify-content-between">
          <h3>Open Ticket</h3>
          <button className="btn btn-nav" onClick={() => navigate("/get-support")}>
            # My Tickets
          </button>
        </div>
      </div>

      {/* Form */}
      <form
        className="row align-items-center g-4 rounded rounded-2 text-start m-2 py-md-3 py-lg-3 table-data"
        onSubmit={handleSubmit}
      >
        <div className="col-6">
          <label className="form-label h5">Name</label>
          <input
            type="text"
            className="form-control bg-transparent border border-1"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-6">
          <label className="form-label h5">Email</label>
          <input
            type="email"
            className="form-control bg-transparent border border-1"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-6">
          <label className="form-label h5">Subject</label>
          <input
            type="text"
            className="form-control bg-transparent border border-1"
            placeholder="Subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="col-6">
          <label className="form-label h5">Priority</label>
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

        <div className="col-12">
          <label className="form-label h5">Message</label>
          <textarea
            className="form-control bg-transparent border border-1"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button
              type="button"
              className="btn btn-nav"
              onClick={() => setShowFile(true)}
            >
              + Attachment
            </button>
          </div>
          <div>
            <button type="submit" className="btn btn-nav">
              Submit
            </button>
          </div>
        </div>

        <small className="mt-2">
          Max 5 files | Max size: 128MB | Allowed: .jpg, .jpeg, .png, .pdf, .doc, .docx
        </small>

        {showFile && (
          <div className="mt-2">
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
  );
}

export default OpenTicket;
