import React from 'react';
import './Product.css'

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">$30</p>
                <div className="product__rating">⭐⭐</div>
            </div>
        </div>
    </div>
  )
}

export default Product