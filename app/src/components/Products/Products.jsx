import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <h1 className='fs-5 fw-bold text-uppercase text-black-50 text-center my-5'>FEATURED PRODUCTS</h1>

            <div  className='col-md-3 mb-4'>
                <div className="card h-100 border-0">
                    <img src="" className={`card-img-top p-3 `} alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">title...</h5>
                        <p className="card-text lead fw-bold">$28.5</p>
                        <Link to="" className="btn btn-outline-danger"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy Now</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
