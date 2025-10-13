  import React from 'react';
  import './QuickStart5.css';

  function QuickStart5() {
    return (
      <div id="Main5">


        <div className="m-hero-container5">

        
        <video
              autoPlay
              muted
              loop
              playsInline
              className="m-bg-video5"
              src="/bgc.mp4"
            >
              Your browser does not support the video tag.
            </video>



          <div className="m-nav-placeholder5"></div>

          <div className="m-content5">
            <h1>Verify Your Account</h1>
            <p>
              As a regulated broker, we require proof of identity  and proof
              of <br />address to verify your account.
            </p>
            <select>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <button>Upload Documents</button>
          </div>
        </div>



        <div className='text'>
          Below is the list of identification documents needed as per your country of residence. Please make sure you
          <br /> have these documents available before you continue with the registration process.
        </div>


        <div className="documents-container">
          <h2 className="section-title">India</h2>

          <div className="identity-section">
            {/* Left side image + upload text */}
            <div className="identity-left">
              <img src="/aadhar.jpg" alt="Aadhaar Card" className="identity-img" />
              <div className="upload-section">
                <p>
                  Verify your account by uploading your Proof of Identity and Proof
                  of Address to our Secure Client Area:
                </p>
                <button className="upload-btn">Upload Documents</button>
              </div>
            </div>

            {/* Right side details */}
            <div className="identity-right">
              <h3>Proof of Identity:</h3>
              <p>
                It is important that identification documents are current, in
                colour, and clearly display the name, date of birth, and expiry
                date.
              </p>
              <ul>
                <li>Passport</li>
                <li>National Identity Card</li>
                <li>Aadhaar</li>
                <li>Voter ID</li>
                <li>PAN Card</li>
                <li>OCI Card</li>
              </ul>

              <h3>Proof of Address:</h3>
              <p>
                The Proof of Address must show the person’s name and current
                residential address, dated within the last three months.
              </p>
              <ul>
                <li>Utility Bill</li>
                <li>Bank Statement</li>
                <li>Government Issued Letter</li>
                <li>Receipt from Rent Payment</li>
              </ul>
            </div>
          </div>
        </div>






      </div>






    );
  }

  export default QuickStart5;