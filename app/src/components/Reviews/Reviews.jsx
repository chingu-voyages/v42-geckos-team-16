import React from "react";
import StarIcons from "../Icons/StarIcons.jsx/StarIcons";

const Reviews = () => {
    return (
        <div className="border border-2 mx-3 my-5">
            <div className="d-flex flex-column align-items-center">
                <h2 className="text-uppercase h2 my-4 fw-normal">
                    Customer reviews
                </h2>
                <StarIcons />
                <button type="button" className="btn btn-outline-dark mb-3">
                    Write a review
                </button>
            </div>
        </div>
    );
};

export default Reviews;
