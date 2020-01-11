import React, { useState } from 'react';
import { ContainerHeader, MenuBtn } from './style.css'
import laTercera from '../../assets/SVG/logo-la-tercera.svg'
import suscribir from '../../assets/SVG/btn-registrate.svg'
import laTerceraWhite from '../../assets/SVG/logo-white.svg'
import suscribirWhite from '../../assets/SVG/btn-registrate-2.svg'
import menuIcon from '../../assets/icons/boton-de-menu.svg'
import closeIcon from '../../assets/icons/boton-de-cierre.svg'
import Aside from './Aside';

const Header = () => {

    const [menu, showMenu] = useState(false)
    const clickMenuHandler = () => {
        showMenu(!menu)
    }

    return (
        <React.Fragment>
            <ContainerHeader active={menu}>
                <div className="logoLT">
                    {menu ? <img src={laTerceraWhite} alt="LaTercera" /> : <img src={laTercera} alt="LaTercera" />}
                </div>
                <div className="botones">
                    {menu ? <img className="btn-suscribir" src={suscribirWhite} alt="suscribir" /> : <img className="btn-suscribir" src={suscribir} alt="suscribir" />}
                    <MenuBtn onClick={clickMenuHandler}>
                        {menu ? <img src={closeIcon} alt="close" style={{ width: '25px' }} /> : <img src={menuIcon} alt="menu" />}
                    </MenuBtn>
                </div>
            </ContainerHeader>
            {menu ? <Aside active={menu}/> : null }
        </React.Fragment>
    );
}

export default Header;