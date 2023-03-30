import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name,price,img,seller,ratings} = props.product;

    return (
        <div className='card-container'>

            <img src={img} className='image' alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacture : {seller}</p>
                <p>Ratings : {ratings} stars</p>
            </div>
            <button className='add-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;