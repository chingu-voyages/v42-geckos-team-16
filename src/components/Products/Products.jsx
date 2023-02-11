import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Pagination } from "../Pagination/Pagination";
import { ShowProducts } from "./ShowProducts";

export const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //stuff for pagination
    let [currentPage, setCurrentPage] = useState(1);
    let [itemsPerPage, setitemsPerPage] = useState(8);
    console.log(currentPage);
    const lastItemIndexPerPage = currentPage * itemsPerPage; // page 1 * 8 items per page = 8 last index item, 2*8 = 14 and so on.
    const firstItemIndexPerPage = lastItemIndexPerPage - itemsPerPage; // page1>> 8-8 = 0 , page2>> 14-8 = 8 and so on

    const productsPerPage = data.slice(
        firstItemIndexPerPage,
        lastItemIndexPerPage
    );

    //get the data from the API
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setData(products);
            setLoading(false);
        };
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container py-5 my-5">
                <div className="row justify-content-center products">
                    <div className="col-12">
                        <h1 className="mb-5 display-6 fw-bolder text-center">
                            Featured Products
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? (
                        <Loading />
                    ) : (
                        <ShowProducts products={productsPerPage} />
                    )}
                </div>
                <div className="pagination d-flex justify-content-center mt-3">
                    <Pagination
                        totalItems={data.length}
                        itemsPerPage={itemsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </>
    );
};
