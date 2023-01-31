import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { firstImage, secondImage } from "../../images/images";
import { StarFillIcon } from "../Icons/Icon";
import StarIcons from "../Icons/StarIcons.jsx/StarIcons";
import Reviews from "../Reviews/Reviews";

const ProductDetails = () => {
    const table = [
        {
            title: "Product Contains",
            content: "30 sachets of whol leaf tea",
        },
        {
            title: "Base",
            content: "China black tea",
        },
        {
            title: "Aroma",
            content: "Sweet floral aroma that comes from the rosebuds",
        },
        {
            title: "Caffeine level",
            content: "Caffeinated",
        },
        {
            title: "Body",
            content: "Medium body",
        },
        {
            title: "Character",
            content:
                "The flavours in this tea combine everything you need for Valentine's Day into one: roses and chocolate",
        },
        {
            title: "Steeping Time",
            content: "5 minutes",
        },
        {
            title: "Brewing Temperature",
            content: "212° F / 100° C",
        },
    ];

    const images = [
        {
            img: firstImage,
            alt: "First Image",
        },
        {
            img: secondImage,
            alt: "Second Image",
        },
    ];

    const [image, setImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [imgIndex, setImgIndex] = useState(0);

    const { id } = useParams();

    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        console.log(product);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="container-fluid col-lg-9 my-2 my-md-5">
            <div className="row mx-1">
                <div className="col-md">
                    <img
                        src={images[image]["img"]}
                        alt="First Image"
                        className="img-fluid"
                        style={{
                            minHeight: "400px",
                            objectFit: "cover",
                        }}
                    />
                    <div className="my-4 d-flex d-md-block justify-content-center">
                        {images.map((img, index) => {
                            return (
                                <img
                                    key={new Date() * index}
                                    onClick={() => {
                                        setImage(index);
                                        setImgIndex(index);
                                    }}
                                    className={`img-fluid me-4 ${
                                        index == imgIndex &&
                                        "border border-5 border-dark"
                                    }`}
                                    style={{
                                        width: "125px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                    src={img.img}
                                    alt={img.alt}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="col-md">
                    <div className="mx-lg-5">
                        <h2 className="fw-light">
                            Harney & Sons HRP Valentine's Day Tea (30 Sachets)
                        </h2>
                        <h3 className="fs-5 fw-bold">$24.95</h3>
                        <StarIcons />
                        <p>Shipping calculated at checkout</p>
                        <p className="mt-5">Quantity</p>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="form-control"
                            style={{
                                width: "75px",
                                height: "50px",
                                textAlign: "center",
                            }}
                        />
                        <button className="btn btn-dark my-4 py-2 w-100">
                            Add to cart
                        </button>
                    </div>
                    <div className="mx-2">
                        <p>
                            Surprise your Valentine with the exclusive Harney &
                            Sons Valentine's Day tea. It is a romantic brew of
                            chocolate flavoured Chinese black tea blended with
                            vanilla and fragrant rosebuds. A perfect way to show
                            your love and share it with your special someone in
                            the cozy winter season... or why not throughout the
                            year. This may be your next favourite tea. This tin
                            contains 30 silken sachets and makes the perfect
                            gift
                        </p>
                    </div>
                    <div className="col hidden d-lg-block">
                        <p>
                            <span className="fw-bold">Ingredients:</span> Black
                            tea, rosebuds, chocolate flavour, vanilla flavour.
                            Contains natural flavours.
                        </p>
                        <table className="table table-bordered align-middle">
                            <tbody>
                                {table.map((line, index) => {
                                    return (
                                        <tr
                                            key={new Date() * index}
                                            className="py-5"
                                        >
                                            <td>{line.title}</td>
                                            <td>{line.content}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row mx-3 d-none d-md-block d-lg-none">
                <p>
                    <span className="fw-bold">Ingredients:</span> Black tea,
                    rosebuds, chocolate flavour, vanilla flavour. Contains
                    natural flavours.
                </p>
                <table className="table table-bordered align-middle">
                    <tbody>
                        {table.map((line, index) => {
                            return (
                                <tr key={new Date() * index} className="py-5">
                                    <td>{line.title}</td>
                                    <td>{line.content}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Reviews />
        </div>
    );
};

export default ProductDetails;
