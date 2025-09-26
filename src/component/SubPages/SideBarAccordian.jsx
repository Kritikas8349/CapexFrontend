import React from "react";
import './SideBarAccordian.css'
import { Link } from "react-router-dom";

const SidebarAccordion = ({Sections}) => {
      return (
        <div className="col-12 col-md-3 col-lg-4 p-3 bg-light border-end">
          {/* Only ONE accordion wrapper */}
          <div className="accordion" id="sidebarAccordion">
    
            {Sections.map((section, index) => {
              const collapseId = `collapse-${index}`;
              const headingId = `heading-${index}`;
              const isFirst = index === 0;
    
              return (
                <div className="accordion-item" key={index}>
                  {/* Header */}
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button d-flex align-items-center ${!isFirst ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded={isFirst ? "true" : "false"}
                      aria-controls={collapseId}
                    >
                      <i className={`${section.icon} me-2`}></i> {section.title}
                      <span className="badge bg-primary ms-auto">{section.items.length}</span>
                    </button>
                  </h2>
    
                  {/* Body */}
                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#sidebarAccordion"
                  >
                    <div className="accordion-body p-0">
                      <ul className="nav flex-column small">
                        {section.items.map((item, i) => (
                          <li className="nav-item" key={i}>
                            <Link
                              to="#"
                              className={`nav-link d-flex align-items-center px-3 py-2 ${
                                item.active ? "text-primary fw-semibold" : "text-dark"
                              }`}
                            >
                              <i className="bi bi-file-earmark-text me-2"></i>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
    
          </div>
        </div>
      );
    };
    
    export default SidebarAccordion;
    
 

