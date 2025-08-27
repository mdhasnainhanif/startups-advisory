"use client";
import React, { useEffect, useState } from 'react'
import { useModal } from '../../hooks/useModal';

const Modal = () => {
    const { isOpen, closeModal } = useModal();



    return (
        <div>
            {isOpen && (
                <div>
                    <div
                        className="modal-bg show_modal"
                        onClick={closeModal}
                    ></div>
                    <div className="custom_modal show_modal" id="welcomeModal">
                        <button
                            className="uc-modal-close-default d-flex items-center top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90 from-close"
                            id="closeModal"
                            type="button"
                            onClick={closeModal}
                        >
                            <i className="unicon-close"></i>
                        </button>
                        <div className="row position-relative items-center">
                            {/* Left side form */}
                            <div className="col-md-6 p-md-0 modal-form-ipad-responsive">
                                <div className="servicesFormPopup">
                                    <div className="vstack" style={{ gap: "0.5rem" }}>
                                        <h1 className="m-0 text-black text-start popup-form-heading">
                                            Get in Touch
                                        </h1>
                                        <form className="vstack" style={{ gap: "0.5rem" }}>
                                            <div className="vstack lg:hstack gap-2 input-fields">
                                                <div className="from-inputs">
                                                    <h5 className="form-input-heading">Full Name</h5>
                                                    <input
                                                        className="form-control h-48px w-100 form-input-area"
                                                        type="text"
                                                        placeholder="Full name"
                                                        required
                                                    />
                                                </div>
                                                <div className="from-inputs">
                                                    <h5 className="form-input-heading">Work Email</h5>
                                                    <input
                                                        className="form-control h-48px w-100 form-input-area"
                                                        type="email"
                                                        placeholder="Work Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="from-inputs">
                                                <h5 className="form-input-heading">Your Phone  Number</h5>
                                                <input
                                                    className="form-control h-48px w-100 form-input-area"
                                                    type="Text"
                                                    placeholder="Phone Number"
                                                    required
                                                />
                                            </div>
                                            <div className="from-inputs-1">
                                                <h5 className="form-input-heading">
                                                    Can you describe your goal
                                                </h5>
                                                <textarea
                                                    className="form-control text-input-area"
                                                    placeholder="We just need one sentence..."
                                                ></textarea>
                                            </div>
                                            <button
                                                className="button-green mt-2"
                                                style={{ width: "100%" }}
                                                type="submit"
                                            >
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Right side image + text */}
                            <div className="col-md-6 p-md-0 modal-ipad-responsive">
                                <div className="home_modal_bg">
                                    <div className="form-content">
                                        <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white form-heading">
                                            <span>Let’s Talk Serious About</span>
                                            <span
                                                className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2"
                                                style={{
                                                    borderRadius: "7px",
                                                    marginLeft: "0.6rem",
                                                    backgroundColor: "#0FDAC2",
                                                }}
                                            >
                                                Scaling Creative?
                                            </span>
                                        </p>
                                        <p className="text-white form-paragraph">
                                            We’ll take a close look at your current design process,
                                            spot what’s slowing you down, and show how Hey Design
                                            helps fast-moving teams get high-quality creative.
                                        </p>
                                        <div className="popup-image">
                                            <img src="assets/images/form-image.webp" alt="Form" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            )}
        </div>
    )
}

export default Modal
