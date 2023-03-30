import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const {name,price,img,seller,ratings} = props.product;
 
    const addCardListener = props.addCardListener;

    return (
        <div className='card-container'>

            <img src={img} className='image' alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacture : {seller}</p>
                <p>Ratings : {ratings} stars</p>
            </div>
            <button onClick={()=> addCardListener(props.product)} className='add-btn'>Add to Cart &nbsp;
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;