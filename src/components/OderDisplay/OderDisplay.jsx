import React from 'react';
import Order from '../Order/Order';

const OderDisplay = () => {
    return (
        <div className='shopContainer'>
            <div className='product-Container'>
                <h2>Order Product Display</h2>
            </div>
            <div className='summeryDiv'>
                <Order cart={[]}></Order>
            </div>
        </div>
    );
};

export default OderDisplay;