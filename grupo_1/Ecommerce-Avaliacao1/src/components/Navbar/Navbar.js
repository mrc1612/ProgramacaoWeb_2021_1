import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { ImCoinDollar } from 'react-icons/im';

import './Navbar.css';

const Navbar = () => {
    const  [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return (
        <>
            <nav className="navbar-header">
                <ul>
                    <li className="logo">
                        <Link to='/'>
                            <icon><ImCoinDollar className="logo"/></icon>
                        </Link>
                    </li>
                    <li className="menu-items">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre nós</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="user">
                        <AiOutlineUser className="user-image" onClick={handleClick}/>
                        <ul className={click ? "link-menu active" : "link-menu"}>
                            <li>
                                <button className="close-btn" onClick={handleClick}><AiOutlineClose/></button>
                            </li>
                            <li>
                                <Link to="/produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/login">Logout</Link>
                            </li>
                        </ul> 
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
