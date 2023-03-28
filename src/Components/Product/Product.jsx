import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>Price:${price}</p>
                <p className='product-manufacturer'>manufacturer: {seller}</p>
                <p className='product-rating'>Rating:{ratings} star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;