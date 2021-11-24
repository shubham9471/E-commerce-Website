import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProduct.css';
import  {useStateValue} from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    
    // accessing the store 
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);
    
    // removing items from basket
    const removeFromBasket = () =>{
        console.log("remove btn clicked")
        console.log("before remove", title)
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id, 
        });
        console.log("after remove", title)
    }

    return (
        <div className= "checkoutProduct">
            <img  className = "checkoutProduct_image" src = {image} alt = ""/>

            <div className = "checkoutProduct_info">
                <p className = "checkoutProduct_title">{title}</p>

                <p className = "checkoutProduct_price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p> 

                <div className = "checkoutProdcuct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <StarRateIcon /> 
                        ))
                    } 
                </div>

                <button onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct
