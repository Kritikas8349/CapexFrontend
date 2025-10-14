import React from "react";
import "./Partnerterms.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { FaDownload } from "react-icons/fa"; // Download icon from react-icons

const Partnerterms = () => {
  const pdfUrl = "/partnerterms.pdf"; // PDF in public folder

  return (
    <div className="partnertier-container">
      {/* Hero Section */}
      <div
        className="cpa-herop"
        style={{ backgroundImage: "url('/12.jpg')" }}
      >
        <div className="cpa-overlayp">
          <div className="cpa-breadcrumb">
            HOME &gt; AFFILIATES &gt; CPA STRUCTURES &gt; <b>PARTNER TERMS</b>
          </div>
          <h1 className="cpa-titlep">PARTNER TERMS</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="cpa-infop">
        <p className="cpa-info-leftpp">PARTNER TERMS & CONDITIONS</p>
      </div>

      {/* PDF Viewer Section */}
      <div className="pdf-viewer-container" style={{ height: "80vh" }}>
        <Worker workerUrl="/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>

      {/* Download Section */}
      <div className="pdf-download-section">
        <h2>
          <FaDownload style={{ marginRight: "10px" }} />
          Download the PDF
        </h2>
        <p>Click below to download the Partner Terms PDF.</p>
        <a href={pdfUrl} download className="download-btn">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Partnerterms;
