import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {AiFillDelete, AiFillEdit, AiFillPlusCircle} from 'react-icons/ai';

import './ProductScreen.scss';

import { getProducts, deleteProduct } from './data'

function ProductScreen() {
    const [id, setId] = useState(0);
    const [click, setClick] = useState(false);
    
    const handleId = (id) => {
        setId(id);
        handleClick();
    }
    const handleClick = () => setClick(!click);
    
    const handleDelete = () => {
        handleClick();
        deleteProduct(id);
    }

    return (
        <div className="product-screen-content">
            <section className="products">
                <Link to="/criarproduto"><AiFillPlusCircle className="add-product-btn"/></Link>
                <ul>
                    {
                        getProducts().map(product =>
                            <li className="product" key={product.id}>
                                <img alt="Produto" src={product.image}/>
                                <div className="product-content">
                                    <div className="product-info">
                                        <h1>{product.name}</h1>
                                        <h3>{product.description}</h3>
                                        <h5>R$ {product.price}</h5>
                                        <ul className="product-btns">
                                            <li><Link to={"/criarproduto/" + product.id}><AiFillEdit className="product-btn"/></Link></li>
                                            <li><AiFillDelete className="product-btn" onClick={() => handleId(product.id)}/></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
            <section className={click ? "delete-confirmation-view" : "delete-view-disable"}>
                <div className="delete-view-content">
                    <div className="delete-view-texts">
                        <h1>
                            Deseja excluir este produto? 
                        </h1>
                        <h4>Nome</h4>
                    </div>
                    <div className="delete-view-btns">
                        <button className="yes-btn" onClick={handleDelete}>Sim</button>
                        <button className="no-btn" onClick={handleClick}>Não</button>
                    </div>
                </div>
            </section>
            <section className="highlights">

            </section>
        </div>
    )
}

export default ProductScreen


