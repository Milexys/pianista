import React from 'react';
import { Link } from 'gatsby';
import { ContainerNav } from './style.css';
import Zoom from 'react-reveal/Zoom';

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
                </ul>
            </Zoom>

        </ContainerNav>
    );
}

export default Nav;