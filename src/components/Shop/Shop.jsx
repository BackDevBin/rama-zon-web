import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shopContainer'>
            <div className='product-Container'>
                {
                    products.map(product => <Product 
                        product ={product}
                        key ={product.id}
                        ></Product>)
                }
               
            </div>
            <div className='summeryDiv'>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;