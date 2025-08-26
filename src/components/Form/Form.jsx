"use client";

import React from "react";

const Form = () => {
  return (
    <div className="services-form">
      <div className="vstack items-center" style={{ alignSelf: "center", gap: "1rem" }}>
        {/* Heading */}
        <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-5 m-0 text-black form-heading">
          Let's talk about your <span className="goals">goals</span>!
        </h1>

        {/* Form */}
        <div>
          <form className="vstack gap-2">
            {/* Row 1 */}
            <div className="vstack lg:hstack gap-2 input-fields">
              <div className="from-inputs">
                <h5 className="form-input-heading">Your Name</h5>
                <input
                  className="form-control h-48px w-100 form-input-area"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="from-inputs">
                <h5 className="form-input-heading">Your Work Email</h5>
                <input
                  className="form-control h-48px w-100 form-input-area"
                  type="email"
                  placeholder="Work Email"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="vstack lg:hstack gap-2 input-fields">
              <div className="from-inputs">
                <h5 className="form-input-heading">Your Phone Number</h5>
                <input
                  id="phone-number"
                  className="form-control h-48px w-100 form-input-area"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="from-inputs">
                <h5 className="form-input-heading">Services</h5>
                <input
                  className="form-control h-48px w-100 form-input-area"
                  type="text"
                  placeholder="Service name"
                  required
                />
              </div>
            </div>

            {/* Row 3 - Textarea */}
            <div className="from-inputs-1">
              <h5 className="form-input-heading">Can you describe your goal</h5>
              <textarea
                className="form-control text-input-area"
                placeholder="We just need one sentence..."
              ></textarea>
            </div>

            {/* Submit */}
            <button className="button-Purple w-100" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
