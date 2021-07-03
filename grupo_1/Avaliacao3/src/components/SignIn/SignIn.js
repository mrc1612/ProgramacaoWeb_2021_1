import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

import './SignIn.scss';
import IsCapslockActive from "../IsCapslockActive/IsCapslockActive";

export default function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push('/');
    }

    const authHandler = () => {
        Cookie.set('login', { 'username': username, 'password': password });
    }

    useEffect(() => {
        return () => {
            
        }
    }, [])
    
    return (
        <div className="signIn-container">
            <form onSubmit={submitHandler}>
                <ul className="signIn-form">
                    <li>
                        <h2>Login</h2>
                    </li>
                    <li>
                        <label htmlFor="name">
                            Nome de usuário
                        </label>
                        <input required type="name" name="name" id="name" onChange={(e) => setUsername(e.target.value)}/>
                    </li>
                    <li>
                        <Link to="/login_recovery">Esqueci meu login</Link>
                    </li>

                    <li>
                        <IsCapslockActive>
                            <label htmlFor="password">
                                Senha
                            </label>
                            <input required type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        </IsCapslockActive>
                    </li>
                    <li>
                        <Link to="/password_recovery">Esqueci minha senha</Link>
                    </li>

                    <li>
                        <button type="submit" onClick={authHandler}>Login</button>
                    </li>
                    <li>
                        <Link id="signup-button" to="/signup">Criar sua conta</Link>
                    </li>
                </ul>
            </form>
        </div>
    );
}
