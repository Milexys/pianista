import styled from 'styled-components';
import theme from '../../styles/theme.css';
import bgImg from '../../assets/SVG/partitura-intro.svg';


const Container = styled.main`
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    display: block;
    .browne-foto{
        width: 100%;
        height: 60%;
        text-align: center;
        img{
            max-height: 80%;
            display: block;
            margin: auto;
        }
        p{
            margin-top: 1rem;
            font-size: 1rem;
            color: ${theme.brown};
            font-weight: 600;
            font-family: ${theme.Merriweather};
            &:after{
                content: "";
                display: block;
                width: 15px;
                height: 3px;
                margin: 0.5rem auto;
                background: ${theme.brown};
            }
        }
    }
    .boton-empezar{
        width: 100%;
        padding-top: 1rem;
    }
`
const ContainerST = styled.div`
    height: 25%;
    width: 90%;
    margin: auto;
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    h2{
        padding-left: 15%;
        font-style: italic;
        font-family: ${theme.Playfair};
        color: ${theme.darkBlue};
    }
    h1{
        text-align: center;
        font-style: italic;
        font-family: ${theme.Playfair};
        color: ${theme.darkBlue};
        font-size: 2.5rem; 
        margin-bottom: 0.5rem
    }
    p{
        text-align: center;
        font-family: ${theme.Merriweather};
        font-weight: 600;
        font-size: 1rem;
        color: ${theme.brown};
        padding: 0 3rem;
    }
`

export {Container, ContainerST}