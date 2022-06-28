import React, { useState } from "react";
import "./Navbar.css";
import { Grid, Typography } from "@mui/material";
import logo from "../../static/images/logo.png";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
    const [renderCart, setRenderCart] = useState(false);
    const cart = useSelector(state => state.cart);

    const renderCartHandler = () => {
        setRenderCart(!renderCart);
    };

    return (
        <header>
            {renderCart && (
                <Cart renderCart={renderCart} renderCartHandler={renderCartHandler} />
            )}
            <nav>
                <Grid
                  container
                  spacing={2}
                  className="navbar-container navbar-shadow"
                >
                    <Grid item spacing={3} container>
                        <Grid item xs={4} sm={3}>
                            <img src={logo} alt="logo" aria-label="logo" />
                        </Grid>
                        <Grid item xs={4} sm={6} container>
                            <Grid item className="display-none navlink-container">
                                 <Link to="/">Home</Link>
                                 <Link to="/products">Products</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={3} container direction="column">
                            <Grid item className="display-none">
                                <Link to="/signin">Signin</Link>
                                <Link to="/signup">Register</Link>
                            </Grid>
                            <Grid item container className="cart-container">
                               <Grid
                                 item
                                 justifyContent="center"
                                 container
                                 tabIndex={0}
                                 sx={{width:"fit-content"}}
                                 onClick={renderCartHandler}
                                 onKeyPress ={renderCartHandler}
                               >
                                <Grid item className="graybackground">
                                    <ShoppingCartRoundedIcon sx={{ color: "#E52254" }} />
                                </Grid>
                                <Grid item className="graybackground">
                                    <Typography>{cart.cartTotalQuantity} items</Typography>
                                </Grid>
                               </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </nav>
        </header>
    )
}

export default Navbar;