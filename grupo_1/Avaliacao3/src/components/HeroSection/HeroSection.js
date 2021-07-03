import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './HeroSection.scss';

function HesoSection(props) {
    return (
        <section className="hero-content">
            <div className="hero-info">
                <h1 className="hero-title">{props.title}</h1>
                <h3 className="hero-subtitle">{props.subtitle}</h3>
                <figure className="hero-link">
                    <Link to="/produtos">
                        <h4>Loja</h4>
                        <AiOutlineShoppingCart />
                    </Link>
                </figure>
            </div>
            <img className="hero-image" alt="Produto" src={props.image}/>
        </section>
    )
}

export default HesoSection
