import React from "react";
import { firstImage, secondImage } from "../../../images/images";
import "./TestHome.css";

function CarouselContainer({ children }) {
    const arrOfChildren = [...new Array(children.length)];

    return (
        <div className="carousel-container">
            {children}
            <div className="carousel__controls">
                <button className="prev-btn">&lt;</button>
                <div className="controls-btn">
                    {arrOfChildren.map((_, index) => {
                        return (
                            <button
                                key={new Date() * index}
                                className="dot-btn"
                            ></button>
                        );
                    })}
                </div>
                <button className="next-btn">&gt;</button>
            </div>
        </div>
    );
}

function TestHome() {
    return (
        <CarouselContainer>
            <div>
                <img src={firstImage} alt="" />
            </div>
            <div>
                <img src={secondImage} alt="" />
            </div>
            <div>
                <img src={firstImage} alt="" />
            </div>
            <div>
                <img src={secondImage} alt="" />
            </div>
        </CarouselContainer>
    );
}

export default TestHome;
