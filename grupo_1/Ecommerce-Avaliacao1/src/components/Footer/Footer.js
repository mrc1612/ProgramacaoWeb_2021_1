import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

import './Footer.scss';

function Footer() {
    return (
        <footer>
            <ul>
                <li className="footer-item">
                    <a href={"https://www.whatsapp.com/?lang=pt_br"}>
                        <FaWhatsapp className="footer-item-icon" />
                        WhatsApp
                    </a>
                </li>
                <li className="footer-item">
                    <a href={"https://www.facebook.com/"}>
                        <FaFacebookF className="footer-item-icon" />
                        Facebook
                    </a>
                </li>
                <li className="footer-item">
                    <a href={"https://www.instagram.com/"}>
                        <FaInstagram className="footer-item-icon" />
                        Instagram
                    </a>
                </li>
            </ul>

            <p>
                Integrantes: 
                    <a href={"https://github.com/Kawzzy"}> Augusto Kalahary Souza Da Silva, </a>
                    <a href={"https://github.com/DanielBusarello"}>Daniel Busarello, </a>
                    <a href={"https://github.com/guilherme-g"}>Guilherme Viana Grasel </a> e
                    <a href={"https://github.com/Leeonardoo"}> Leonardo de Oliveira. </a>
            </p>
        </footer>
    )
}

export default Footer
