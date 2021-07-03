import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { ImCoinDollar } from 'react-icons/im';

import './Navbar.css';
import Cookie from 'js-cookie';

const Navbar = () => {
    const  [click, setClick] = useState(false);

    const [username, setUsername] = useState('');

    const [theme, setTheme] = useState("");

    useEffect(() => {
        if (Cookie.get('login')) {
            setUsername(Cookie.getJSON('login').username.split(" ")[0])
        }

        if(Cookie.get('custom')) {  
            setTheme("custom");
        } else {
            setTheme("");
        }

        return () => {
            
        }
    }, [])

    const handleClick = () => setClick(!click);

    const handleLoggout = () => {
        Cookie.remove('login');
        Cookie.remove('userData');
    }

    return (
        <nav className={`navbar-header ${theme}`}>
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
                            <Link to="/multimedia">Multimídia</Link>
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
                    <div>
                        {username ? <h2>Bem-vindo, {username}</h2> : ""}
                        <AiOutlineUser className="user-image" onClick={handleClick}/>
                    </div>
                    <ul className={click ? "link-menu active" : "link-menu"}>
                        <li>
                            <button className="close-btn" onClick={handleClick}><AiOutlineClose/></button>
                        </li>
                        <li>
                            {Cookie.get('login') ? <Link to="/profile">Perfil</Link> : <></>}
                        </li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>
                            { 
                                Cookie.get('login') 
                                ? <a href="/" onClick={handleLoggout}>Logout</a> 
                                : <a href="/login">Login</a> 
                            } 
                        </li>
                    </ul> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
