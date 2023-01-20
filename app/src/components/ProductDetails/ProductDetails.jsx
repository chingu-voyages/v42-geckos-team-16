import React from "react";
import { firstImage } from "../../images/images";
import { StarFillIcon } from "../Icons/Icon";

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

    return (
        <div className="w-75 container-fluid my-5 ">
            <div className="row d-flex align-items-stretch">
                <div className="col">
                    <img
                        src={firstImage}
                        alt="First Image"
                        className="img-fluid"
                        style={{ minHeight: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="col">
                    <div className="mx-5">
                        <h2 className="fw-light">
                            Harney & Sons HRP Valentine's Day Tea (30 Sachets)
                        </h2>
                        <h3 className="fs-5 fw-bold">$24.95</h3>
                        <div className="d-flex justify-content-start align-items-center">
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarFillIcon />
                            <span className="mx-2">11 reviews</span>
                        </div>
                        <p>Shipping calculated at checkout</p>
                        <p className="mt-5">Quantity</p>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={1}
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
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <img
                        className="img-fluid"
                        style={{ width: "125px", height: "150px" }}
                        src={firstImage}
                        alt="Image"
                    />
                    <img
                        className="img-fluid mx-4"
                        style={{ width: "125px", height: "150px" }}
                        src={firstImage}
                        alt="Image"
                    />
                </div>
                <div className="col">
                    <p>
                        <span className="fw-bold">Ingredients:</span> Black tea,
                        rosebuds, chocolate flavour, vanilla flavour. Contains
                        natural flavours.
                    </p>
                    <table className="table table-bordered align-middle">
                        <tbody>
                            {table.map((line) => {
                                return (
                                    <tr className="py-5">
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
    );
};

export default ProductDetails;
