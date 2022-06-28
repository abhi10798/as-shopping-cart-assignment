import React from "react";
import "./SingleProduct.css";
import { addToCart, getTotal } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = ({id, name, imageURL, description, price }) => {
    
    const dispatch = useDispatch();

    const buyNowHandler = () => {
        dispatch(addToCart({id,name,imageURL,price}));
        dispatch(getTotal());
    }

    return (
        <div className="SingleProduct-box">
            <div className="SingleProductHeading">
                <h3>{name}</h3>
            </div>
            <div className="SingleProductImage">
                <img src={imageURL} alt={name} />
            </div>
            <div className="SingleProductDescription">
                <p>{description}</p>
            </div>
            <div className="SingleProductMRP">
                <div className="SingleProductPrice">
                    <p>MRP Rs.{price}</p>
                </div>
                <div className="SingleProductBtn">
                    <button onClick={buyNowHandler}>Buy Now</button>
                </div>
            </div>
        </div>
    )
};

export default SingleProduct;