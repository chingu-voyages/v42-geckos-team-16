import React from "react";
import { StarFillIcon, StarIcon } from "../Icon";

const StarIcons = ({ className }) => {
    return (
        <div
            className={`d-flex justify-content-start align-items-center mb-3 ${className}`}
        >
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarIcon />
            <span className="mx-2">11 reviews</span>
        </div>
    );
};

export default StarIcons;
