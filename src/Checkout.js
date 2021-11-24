import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal";
import CurrencyFormat from 'react-currency-format';


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className ="checkout ">
            <div className = "checkout_left">
            <img className = "checkout__ad" src = "https://images-na.ssl-images-amazon.com/images/G/01//pxd/marketing/paycode/2021/US-MX-lp-lego-assets/slsm_banner_1500x300.png" alt=""/>

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your Basket. To buy one or more items, click "Add To Basket" and your products will be shown here.</p>
                </div>
        ):( 
            <div>
                <h2 className = "checkout_title">Your Shopping Basket</h2>
                {/* the checkout component  that we created*/}
                {basket?.map((item) => {
                    console.log(item);
                    return (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image  = {item.image}
                        price  = {item.price}
                        rating = {item.rating} 
                        />
                    );
                })}
                
            </div> 
        ) }
        </div>
        {basket.length > 0 && (
            <div className = "checkout_right">
                <Subtotal/>
            </div>
        )}   
        </div>
    );

}

export default Checkout
