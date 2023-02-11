import React, { useEffect } from "react";
import { useState } from "react";
import { StarFillIcon, StarIcon } from "../Icon";

const StarIcons = ({ className, rate }) => {
    const [nbFilledStars, setNbFilledStars] = useState([]);
    const [nbEmptyStars, setNbEmptyStars] = useState([]);

    useEffect(() => {
        setNbFilledStars(Math.floor(rate));
        setNbEmptyStars(5 - Math.floor(rate));
    }, [rate]);

    return (
        <>
            <div
                className={`d-flex justify-content-start align-items-center mb-2 ${className}`}
            >
                {nbFilledStars &&
                    [...new Array(nbFilledStars)].map((_, index) => {
                        return <StarFillIcon />;
                    })}
                {nbEmptyStars &&
                    [...new Array(nbEmptyStars)].map((_, index) => {
                        return <StarIcon />;
                    })}

                <span className="mx-2">{rate}</span>
            </div>
        </>
    );
};

export default StarIcons;
