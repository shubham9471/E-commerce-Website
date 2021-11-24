import React from 'react'
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from './StateProvider';

function Product({title, image, id, price, rating}) {
    const [{ }, dispatch] = useStateValue();

    const addtobasket = () =>{

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        }); 

    };
    return (
        <div className = "product">
            <div className = "product_info">
                <p>{title}</p>
                <p className = "product__">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                {/* mapping the star rating using a techqiue in js*/}
                <div className = "prodcuct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <StarRateIcon /> 
                        ))
                    } 
                </div>

            </div>

            <img src ={image} alt = ""/>
            <button onClick ={addtobasket}>Add to basket</button>

            
            
        </div>
    )
}

export default Product
