import React from 'react';
import { Link } from '@reach/router';
import { ContainerNav } from './style.css';
import Zoom from 'react-reveal/Zoom';
import arrow from '../../../assets/SVG/flecha-hacia-abajo.svg'

const Nav = () => {
    return (
        <ContainerNav>
            <Zoom top cascade duration={1500}>
                <ul>
                    <li>
                        <Link to="nino-prodigio">Niño Prodigio</Link>
                    </li>
                    <li>
                        <Link to="unas-heridas">Uñas Heridas</Link>
                    </li>
                    <li>
                        <Link to="la-invitacion">La Invitación</Link>
                    </li>
                    <li>
                        <Link to="volver">Volver</Link>
                    </li>
                    <li>
                        <Link to="epifania">Epifanía</Link>
                    </li>
                    <li>
                        <img src={arrow} alt="arrow"/>
                    </li>
                </ul>
            </Zoom>

        </ContainerNav>
    );
}

export default Nav;