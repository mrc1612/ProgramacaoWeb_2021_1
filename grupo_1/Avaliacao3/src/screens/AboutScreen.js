import React from 'react'

import InfoSection from '../components/InfoSection/InfoSection';

import './AboutScreen.scss';

function AboutScreen() {
    return (
        <div className="about-content">
            <InfoSection title="Sobre nós" 
                darkTheme={false}
                side={"left"}
                data={[
                    <p>Nossa empresa está no mercado há mais de 10 anos. </p>,
                    <p>Buscamos sempre a excelencia em nossos produtos e nos serviços prestados aos nossos clientes.</p>,
                    <p>Atualmente, nossa equipe conta com 50 funcionário, com nossa sede na cidade de Blumenau, Santa Catarina.</p>,
                    <img src={"https://www.furb.br/web/upl/noticias/201401/01-furb.jpg"} alt="Matriz" />
                ]}
            />
        </div>
    )
}

export default AboutScreen
