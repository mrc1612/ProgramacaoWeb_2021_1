import React from 'react'

import { AiOutlinePhone, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

import InfoSection from '../components/InfoSection/InfoSection';

function ContactScreen() {
    return (
        <div className="contact-content">
            <InfoSection title="Contato" 
                darkTheme={false} 
                subtitle={"Envie-nos uma mensagem"}
                side={"right"}
                data={[
                    <figure className="data-figure">
                        <icon><AiOutlinePhone/></icon>
                        <h3>Telefone: (47) 3321-0200</h3>
                    </figure>,
                    <figure className="data-figure">
                        <icon><AiOutlineMail/></icon>
                        <h3>Email: bccompras@furb.br</h3>
                    </figure>,
                    <figure className="data-figure">
                        <icon><AiOutlineWhatsApp/></icon>
                        <h3>WhatsApp: (47) 4002-8922</h3>
                    </figure>,
                ]}
            />
        </div>
    )
}

export default ContactScreen
