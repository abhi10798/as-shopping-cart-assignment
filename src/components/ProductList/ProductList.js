import React from "react";
import "./ProductList.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Grid } from "@mui/material";

const ProductList = ({productData}) => {
    return (
        <Grid container className="ProductList-container" spacing={2} pl={1}>
             {
                productData.map(item => (
                    <Grid item className="ProductList-item-container" key={item.id} xs sm={6} md={4} lg={3}>
                        <SingleProduct
                          id={item.id}
                          name={item.name}
                          imageURL={item.imageURL}
                          description={item.description}
                          price={item.price}
                        />
                    </Grid>
                ))
             }
        </Grid>
    )
};

export default ProductList;