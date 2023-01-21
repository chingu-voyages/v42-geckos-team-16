import React from "react";
import { StarFillIcon } from "../Icon";

const StarIcons = () => {
    return (
        <div className="d-flex justify-content-start align-items-center mb-3">
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <span className="mx-2">11 reviews</span>
        </div>
    );
};

export default StarIcons;
