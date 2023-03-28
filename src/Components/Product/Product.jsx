import React from 'react';
import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css';
const Product = (props) => {
    const { name, price, seller, ratings, img ,id } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>Price:${price}</p>
                <p className='product-manufacturer'>manufacturer: {seller}</p>
                <p className='product-rating'>Rating:{ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
         
                Add To Cart
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
            </button>
        </div>
    );
};

export default Product;