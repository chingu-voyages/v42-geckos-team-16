import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { formatString } from "../../helpers/string.helper";
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
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const fetchProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);

        console.log(data);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="container-fluid col-lg-9 my-2 my-md-5">
            <div className="row mx-1">
                <div className="col-md">
                    {loading ? (
                        <Skeleton
                            height={500}
                            enableAnimation={true}
                            animation="wave"
                        />
                    ) : (
                        <img
                            src={product["image"]}
                            alt="First Image"
                            className="img-fluid"
                            style={{
                                minHeight: "400px",
                                objectFit: "cover",
                            }}
                        />
                    )}
                    {/* <div className="my-4 d-flex d-md-block justify-content-center">
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
                    </div> */}
                </div>
                <div className="col-md">
                    {loading ? (
                        <div className="d-flex flex-column gap-3 mt-2 mt-md-0">
                            <Skeleton height={240} animation="wave" />
                            <Skeleton height={240} animation="wave" />
                        </div>
                    ) : (
                        <>
                            <div className="mx-lg-5">
                                <h2 className="fw-light">{product["title"]}</h2>
                                <div className="d-flex flex-column justify-content-lg-between flex-lg-row">
                                    <h3 className="fs-5 fw-bold">
                                        ${product["price"]}
                                    </h3>
                                    <StarIcons
                                        rate={product && product.rating?.rate}
                                    />
                                </div>
                                {/* <p>Shipping calculated at checkout</p> */}
                                <h3 className="fs-5 text-primary">
                                    {product["category"] &&
                                        formatString(product["category"])}
                                </h3>
                                <p className="mt-5">Quantity</p>

                                <div className="d-flex flex-md-row justify-content-md-center align-items-center">
                                    <button
                                        onClick={() => {
                                            if (quantity <= 1) {
                                                setQuantity(0);
                                                return;
                                            }
                                            setQuantity((qty) => qty - 1);
                                        }}
                                        className="btn btn-outline-dark py-2 px-5 me-3"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(e.target.value)
                                        }
                                        className="form-control"
                                        style={{
                                            maxWidth: "110px",
                                            height: "50px",
                                            textAlign: "center",
                                        }}
                                    />
                                    <button
                                        onClick={() =>
                                            setQuantity((qty) => qty + 1)
                                        }
                                        className="btn btn-outline-dark py-2 px-5 ms-3"
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="btn btn-dark my-4 py-2 w-100">
                                    Add to cart
                                </button>
                            </div>
                            <div className="mx-2">
                                <p>
                                    {product["description"] &&
                                        formatString(product["description"])}
                                </p>
                            </div>
                            {/* <div className="col hidden d-lg-block">
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
                    </div> */}
                        </>
                    )}
                </div>
            </div>
            {/* <div className="row mx-3 d-none d-md-block d-lg-none">
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
            </div> */}
            {/* <Reviews /> */}
        </div>
    );
};

export default ProductDetails;
