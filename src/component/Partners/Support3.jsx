import React from 'react';
import './Support3.css';


const Support3 = () => {

   

    return (
        <div className="support3-container">
            {/* Top Hero Section */}
            <div className="hero-section-s3">
                <div className="hero-overlay-s3">
                    <p className="breadcrumb-s3">
                        HOME &gt; SUPPORT &gt; EDUCATION &gt; <span>BRAND GUIDELINES</span>
                    </p>
                    <h1 className="hero-heading-s3">Brand Guidelines</h1>
                </div>
            </div>

            {/* Blue Section - Overlapping */}
            <div className="brand-guidelines-section-s3">
                <div className="content-wrapper-s3">
                    <h2 className="left-heading-s3">
                        Market.trad Partners-<br />Brand Guidelines

                        <p className="right-paragraph-s3">
                            You can promote BlackBull Markets on your website using the banners and tools which are available
                            inside the affiliate portal. Permission is granted to make use of any material you find there only.
                        </p>
                    </h2>

                </div>
            </div>

            <section className="promo-container">
                <h1 className="promo-title">How can I promote Market.trad Markets?</h1>

                <div className="promo-box">
                    <p className="promo-subtitle">
                        Please follow these guidelines when promoting BlackBull Markets.
                    </p>

                    <p>
                        You can promote BlackBull Markets on your website using the banners and tools
                        which are available inside the affiliate portal. Permission is granted to make
                        use of any material you find there only. Any other materials you would like to
                        advertise with requires express prior approval from BlackBull Markets.
                    </p>

                    <p>You can place the authorised marketing materials that contain your referral links on:</p>

                    <ul>
                        <li>Your own official websites or blogs you are active in</li>
                        <li>
                            Other websites or forums where you have approval from the site administrators
                            to promote third-party advertisements
                        </li>
                        <li>
                            In other personal electronic communications
                            <em>
                                {' '}
                                (unsolicited emails and bulk email blasts of any kind are strictly
                                prohibited)
                            </em>
                            . Recipients must specifically opt-in to receive communications and have an
                            opt-out option available.
                        </li>
                    </ul>
                </div>
            </section>


        </div>
    );
};

export default Support3;
