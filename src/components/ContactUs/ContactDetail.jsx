// ContactDetail.jsx
import React from "react";

const ContactDetail = () => {
    return (
        <div className="container section-padding sectionMargin contactUs">
            <div className="row">
                {/* Location */}
                <div className="col-3 col-sm-12">
                    <div className="contactUsCards mt-0">
                        <img src="assets/images/location.svg" alt="Location" />
                        <h6>Location</h6>
                        <p>ABC Plot, ABC City, ABC Country</p>
                    </div>
                </div>

                {/* Contact */}
                <div className="col-3 col-sm-12">
                    <div className="contactUsCards">
                        <img src="assets/images/phone.svg" alt="Phone" />
                        <h6>Contact</h6>
                        <p>0123456789 , 0789456123</p>
                    </div>
                </div>

                {/* Email */}
                <div className="col-3 col-sm-12">
                    <div className="contactUsCards">
                        <img src="assets/images/email.svg" alt="Email" />
                        <h6>Email</h6>
                        <p>startupadvisor@company.com</p>
                    </div>
                </div>

                {/* Hours */}
                <div className="col-3 col-sm-12">
                    <div className="contactUsCards">
                        <img src="assets/images/hours.svg" alt="Hours" />
                        <h6>Hours</h6>
                        <p>Mon–Fri, 9am–6pm , Sat & Sun , 12pm–6pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
