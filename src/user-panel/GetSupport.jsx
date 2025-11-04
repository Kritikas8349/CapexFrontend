import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


import axios from "axios";

function GetSupport() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${backendURL}/api/tickets`);
        const data = res.data;
        const ticketList = Array.isArray(data)
          ? data
          : Array.isArray(data.tickets)
          ? data.tickets
          : [];
        setTickets(ticketList);
      } catch (error) {
        console.log("Error fetching tickets:", error);
        setTickets([]);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="container-fluid py-4 bg-light" style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3 px-3">
        <h3 className="fw-bold text-center text-md-start mb-0">Support Tickets</h3>
        <Link
          to="/open-ticket"
          className="btn btn-nav fw-semibold px-4 py-2 rounded-3"
        >
          + New Ticket
        </Link>
      </div>

      {/* Tickets Section */}
      <div className="card shadow-sm border-0 mx-2 mx-md-3">
        <div className="card-body p-0">
          {tickets.length === 0 ? (
            <div className="text-center py-5">
              <img
                src="/emptybox.png"
                alt="Empty"
                className="img-fluid mb-3"
                style={{ maxWidth: "120px", opacity: 0.8 }}
              />
              <h6 className="text-muted fw-normal">No support ticket found</h6>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: "45%" }}>Subject</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th className="text-nowrap">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr key={t._id}>
                      <td className="fw-medium">{t.subject}</td>

                      <td>
                        <span
                          className={`badge rounded-pill ${
                            t.status === "Open"
                              ? "bg-success"
                              : t.status === "Pending"
                              ? "bg-warning text-dark"
                              : "bg-secondary"
                          }`}
                        >
                          {t.status}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`badge rounded-pill ${
                            t.priority === "High"
                              ? "bg-danger"
                              : t.priority === "Medium"
                              ? "bg-info text-dark"
                              : "bg-secondary"
                          }`}
                        >
                          {t.priority}
                        </span>
                      </td>

                      <td>{new Date(t.updatedAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetSupport;
