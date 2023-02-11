import React from "react";
import StarIcons from "../Icons/StarIcons.jsx/StarIcons";
import Review from "./Review.jsx/Review";

const Reviews = () => {
    const reviews = [
        {
            heading: "Valentine's blind a hit",
            author: "Anonymous",
            publishDate: new Date(Date.now()).toDateString(),
            comment:
                "There is a pleasant aroma as the tea steeps, and then the flavor is quite satisfying. Consider adding a touch of honey or sugar to further enhance the flavor. (Originally posted on harney.com)",
        },
        {
            heading: "Valentine's blind a hit",
            author: "Anonymous",
            publishDate: new Date(Date.now()).toDateString(),
            comment:
                "There is a pleasant aroma as the tea steeps, and then the flavor is quite satisfying. Consider adding a touch of honey or sugar to further enhance the flavor. (Originally posted on harney.com)",
        },
        {
            heading: "Valentine's blind a hit",
            author: "Anonymous",
            publishDate: new Date(Date.now()).toDateString(),
            comment:
                "There is a pleasant aroma as the tea steeps, and then the flavor is quite satisfying. Consider adding a touch of honey or sugar to further enhance the flavor. (Originally posted on harney.com)",
        },
        {
            heading: "Valentine's blind a hit",
            author: "Anonymous",
            publishDate: new Date(Date.now()).toDateString(),
            comment:
                "There is a pleasant aroma as the tea steeps, and then the flavor is quite satisfying. Consider adding a touch of honey or sugar to further enhance the flavor. (Originally posted on harney.com)",
        },
    ];

    return (
        <div className="border border-1 mx-3 my-5">
            <div className="d-flex flex-column align-items-center">
                <h2 className="text-uppercase h2 my-4 fw-normal">
                    Customer reviews
                </h2>
                <StarIcons />
                <button type="button" className="btn btn-outline-dark mb-3">
                    Write a review
                </button>
            </div>
            <div>
                {reviews.map((review, index) => {
                    return <Review key={new Date() * index} {...review} />;
                })}
            </div>
        </div>
    );
};

export default Reviews;
