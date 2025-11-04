import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GetSupport.css";


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
    <div className="container-fluid py-4" style={{ minHeight: "100vh", width: "100%" }}>
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h3 className="fw-bold m-0">Support Tickets</h3>
        <Link to="/open-ticket" className="btn btn-primary rounded-3 fw-semibold">
          + New Ticket
        </Link>
      </div>

      {/* Tickets */}
      <div className="card shadow-sm border-0 w-100">
        <div className="card-body p-0">

          {tickets.length === 0 ? (
            <div className="text-center py-5">
              <img
                src="/emptybox.png"
                alt="Empty"
                style={{ maxWidth: "120px", opacity: 0.8 }}
              />
              <h6 className="mt-3 text-muted">No support ticket found</h6>
            </div>
          ) : (
            <table className="table table-hover align-middle mb-0 w-100">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: "45%" }}>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th style={{ whiteSpace: "nowrap" }}>Last Updated</th>
                </tr>
              </thead>

              <tbody>
                {tickets.map((t) => (
                  <tr key={t._id}>
                    <td className="fw-medium">{t.subject}</td>

                    <td>
                      <span
                        className={`badge ${
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
                        className={`badge ${
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
          )}

        </div>
      </div>
    </div>
  );
}

export default GetSupport;
