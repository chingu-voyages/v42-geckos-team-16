import React from "react";
import { StarFillIcon } from "../../Icons/Icon";
import StarIcons from "../../Icons/StarIcons.jsx/StarIcons";

const Review = ({ heading, author, publishDate, comment }) => {
    return (
        <div className="border-top border-top-1 m-4">
            <StarIcons className="pt-3" />
            <h3 className="fs-6 fw-normal">{heading}</h3>
            <h4 className="fw-normal fs-6">
                <span className="fw-bold">{author}</span> on{" "}
                <span className="fw-bold">{publishDate}</span>
            </h4>
            <p className="pt-3">{comment}</p>
            <button className="btn btn-outline-dark fs-6 text-decoration-underline text-end">
                Report as inapropriate
            </button>
        </div>
    );
};

export default Review;
