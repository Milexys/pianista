import React from 'react';
import { Link } from 'gatsby';
import { Container, ContainerST } from './style.css';
import felipeBrowne from '../../assets/1x/felipe-foto-2.png';
import Pulse from 'react-reveal/Pulse';
import Button from '../Button';

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
                
                <Link to='toca-la-melodia'><Pulse forever={true}><Button title="Empezar" /></Pulse></Link>
               
            </div>
        </Container>
    );
}

export default Home;