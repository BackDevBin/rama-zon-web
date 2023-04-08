import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart ,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addCardListener = (product) => {
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shopContainer'>
            <div className='product-Container'>
                {
                    products.map(product => <Product 
                        product ={product}
                        key ={product.id}
                        addCardListener ={addCardListener}
                        ></Product>)
                }
               
            </div>
            <div className='summeryDiv'>
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;