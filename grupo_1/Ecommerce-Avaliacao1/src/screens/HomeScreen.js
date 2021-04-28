import React from 'react'

import { AiOutlinePhone, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

import HeroSection from '../components/HeroSection/HesoSection';
import InfoSection from '../components/InfoSection/InfoSection';
import ProductCard from '../components/ProdcutCard/ProductCard';

function HomeScreen() {
    return (
        <div className="home-content">
            <HeroSection title="Be Simple" subtitle="Confira nossos produtos" image="/img/herobackground.jpg"/>
            <InfoSection title="Produtos" 
                subtitle={"Confira nossos destaques"}
                slide={true}
                data={[
                    <ProductCard id={2} name={"Air Pods"} description={"Fone de ouvido Bluetooth"} price={150} image={"/img/airpods.jpeg"}/>,
                    <ProductCard id={3} name={"Drone Mavic 2"} description={"Drone Mavic 2"} price={1250} image={"/img/drone.jpg"}/>,
                    <ProductCard id={4} name={"Câmera"} description={"Câmera Canon"} price={350} image={"/img/cam.jpeg"}/>,
                ]}
            />
            <InfoSection title="Sobre nós" 
                darkTheme={true}
                side={"left"}
                data={[
                    <p>Nossa empresa está no mercado há mais de 10 anos. </p>,
                    <p>Buscamos sempre a excelencia em nossos produtos e nos serviços prestados aos nossos clientes.</p>,
                    <p>Atualmente, nossa equipe conta com 50 funcionário, com nossa sede na cidade de Blumenau, Santa Catarina.</p>,
                    <img src={"https://www.furb.br/web/upl/noticias/201401/01-furb.jpg"} alt="Matriz" />
                ]}
            />
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

export default HomeScreen
