import { Link } from "react-router-dom";
import styles from "./Products.module.css";

export const ShowProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product._id} className="col-md-3 mb-4">
            <div className="card border-0 h-100">
              <img
                src={product.image}
                className={`card-img-top p-3 ${styles["prod-image"]}`}
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline-dark"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
                  Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
