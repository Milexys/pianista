import styled from 'styled-components'
import image from '../../../assets/2x/fondo-menu.jpg'

export const ContainerAside = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 3;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: block;
    margin: auto;
`