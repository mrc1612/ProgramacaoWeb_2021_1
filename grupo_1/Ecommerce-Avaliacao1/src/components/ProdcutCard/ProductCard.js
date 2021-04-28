import React from 'react';

import './ProductCard.scss';

function ProductCard(props) {
    return (
        <li className="product" key={props.id}>
            <img alt="Produto" src={props.image}/>
            <div className="product-content">
                <div className="product-info">
                    <h1>{props.name}</h1>
                    <h3>{props.description}</h3>
                    <h5>R$ {props.price}</h5>
                </div>
            </div>
        </li>
    )
}

export default ProductCard
