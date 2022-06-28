import { checkboxClasses, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductList from "../../components/ProductList/ProductList";
import { productURL } from "../../Url/Url";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [filterValue, setFilterValue] = useState("");

    const location = useLocation();

    useEffect(() => {
        if(location.state != null) {
            setFilterValue(location.state.id);
            location.state = null;
        }
        const fetchData = async () => {
            const res = await axios.get(productURL);
            checkForFilter(res.data);
        }
        fetchData();
    }, [filterValue]);

    const checkForFilter = (data) => {
        if(filterValue != "") {
           const res = data.filter(item => item.category === filterValue);
           setProductData(res);
        } else {
            setProductData(data);
        }
    }

    return (
        <div className="product-container">
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={3} className="displayname">
                    <SideBar filterValue={filterValue} setFilterValue={setFilterValue} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <ProductList productData={productData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Products;