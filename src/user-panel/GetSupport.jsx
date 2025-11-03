import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function GetSupport() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        console.log("Backend URL:", backendURL);

        const res = await axios.get(`${backendURL}/api/tickets`);
        console.log("Tickets API Response:", res.data);

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
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <h3>Support Tickets</h3>
        <Link to="/open-ticket" className="btn btn-nav">+ New Ticket</Link>
      </div>

      <div className="rounded-3 py-3 text-center table-data">
        {tickets.length === 0 ? (
          <div className="py-5">
            <img src="emptybox.png" alt="Empty" style={{ maxWidth: "120px", opacity: 0.8 }} />
            <p>No support ticket found</p>
          </div>
        ) : (
          tickets.map((t) => (
            <div key={t._id} className="row py-2 border-bottom">
              <div className="col">{t.subject}</div>
              <div className="col">{t.status}</div>
              <div className="col">{t.priority}</div>
              <div className="col">{new Date(t.updatedAt).toLocaleString()}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GetSupport;
