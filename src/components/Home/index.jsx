import React from 'react';
import { Link } from 'gatsby';
import { Container, ContainerST } from './style.css';
import felipeBrowne from '../../assets/1x/felipe-foto-2.png';
import empezar from '../../assets/SVG/btn-empezar.svg'
import Pulse from 'react-reveal/Pulse';

const Home = () => {
    return (
        <Container>
            <div className="browne-foto">
                <img src={felipeBrowne} alt="foto de Felipe Browne" />
                <p>Felipe Browne</p>
            </div>
            <ContainerST>
                <h2>Un Pianista</h2>
                <h1>Improbable</h1>
                <p>La historia de un pianista ejemplar</p>
            </ContainerST>
            <div className="boton-empezar">
                
                <Link to='toca-la-melodia'><Pulse forever={true}><img src={empezar} alt="Botón de Empezar" /></Pulse></Link>
               
            </div>
        </Container>
    );
}

export default Home;