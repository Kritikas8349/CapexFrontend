import React from "react";

function Maintenance() {
  return (
    <div
      className="bg-light d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container text-center">
        <div
          className="card shadow-lg border-0 p-4"
          style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5651/5651882.png"
            className="img-fluid mx-auto mb-3"
            alt="Maintenance Icon"
            style={{ width: "140px" }}
          />

          <h2 className="fw-bold mb-2">We’ll Be Back Soon!</h2>

          <p className="text-muted mb-4 px-3">
            Our website is currently undergoing scheduled maintenance.
            We’re working hard to improve your experience.
          </p>

          <div className="spinner-border mb-3 " role="status"></div>

          <p className="text-secondary small">
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
