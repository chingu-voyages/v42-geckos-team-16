import React from "react";
import "./Carousel.css";

const CarouselItem = ({ imgsrc, heading, description, alt, children }) => {
    return (
        <div className="carousel__item-container text-white">
            <img className="carousel__image" src={imgsrc} alt={alt} />
            <div className="carousel__image-overlay"></div>
            <h3 className="carousel__heading">{heading}</h3>
            <p className="carousel__paragraph">{description}</p>
            <main className="carousel__btn">{children}</main>
        </div>
    );
};

export default CarouselItem;
