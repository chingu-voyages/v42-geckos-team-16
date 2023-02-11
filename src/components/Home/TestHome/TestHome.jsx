import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { firstImage, secondImage, thirdImage } from "../../../images/images";
import CarouselItem from "../../Carousel/Carousel";
import { ShowProducts } from "../../Products/ShowProducts";
import "./TestHome.css";

function CarouselContainer({ children }) {
    const arrOfChildren = [...new Array(children.length)];

    let slideIndex = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const plusSlide = (number) => {
        showSlides((slideIndex += number));
    };

    const currentSlide = (number) => {
        showSlides((slideIndex = number));
    };

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot-btn");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(
                " active-element",
                ""
            );
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active-element");
    };

    return (
        <div className="carousel-container">
            {children}
            <div className="carousel__controls">
                <button onClick={() => plusSlide(-1)} className="prev-btn">
                    &#10094;
                </button>
                <div className="controls-btn">
                    {arrOfChildren.map((_, index) => {
                        return (
                            <button
                                onClick={() => currentSlide(index + 1)}
                                key={new Date() * index}
                                className="dot-btn"
                            ></button>
                        );
                    })}
                </div>
                <button onClick={() => plusSlide(1)} className="next-btn">
                    &#10095;
                </button>
            </div>
        </div>
    );
}

function CarouselElement({ children }) {
    return <div className="slide">{children}</div>;
}

function TestHome() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const images = [
        {
            src: firstImage,
            heading: "Shop with us",
            name: "Watch",
            description: "A wide variety of products at your disposal",
        },
        {
            src: secondImage,
            heading: "Find your joy",
            name: "Speaker",
            description: "We sell everything you need",
        },
        {
            src: thirdImage,
            heading: "New Year's Promotion",
            name: "Earphone",
            description: "Browse through our rich catalogues",
        },
    ];

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                "https://fakestoreapi.com/products?limit=8"
            );
            const data = await response.json();
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <>
            <CarouselContainer>
                {images.map((image, _index) => {
                    return (
                        <CarouselElement
                            key={new Date() * _index}
                            className="m-0"
                        >
                            <CarouselItem
                                imgsrc={image.src}
                                description={image.description}
                                alt={image.name}
                                heading={image.heading}
                            >
                                <button
                                    className="btn btn-dark"
                                    onClick={() => navigate("/login")}
                                >
                                    Get Started
                                </button>
                            </CarouselItem>
                        </CarouselElement>
                    );
                })}
            </CarouselContainer>
            <div className="py-5 mx-auto container">
                <h2 className="text-center mb-5">Featured Products</h2>
                {products ? (
                    <div className="row justify-content-center">
                        <ShowProducts products={products} />
                    </div>
                ) : (
                    <div className="d-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <Skeleton width={320} animation="wave" />
                        <Skeleton width={320} animation="wave" />
                        <Skeleton width={320} animation="wave" />
                        <Skeleton width={320} animation="wave" />
                    </div>
                )}
            </div>
        </>
    );
}

export default TestHome;
