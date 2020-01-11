import styled from 'styled-components'
import theme from '../../styles/theme.css'
import partitura from '../../assets/2x/partitura-color-2@2x.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    padding-top: 50px;
    .texto-1{
        width:100%;
        height: 10%;
        margin: 5% auto;
        padding: 1rem 3rem 0 3rem;
        p{
            color: ${theme.brown};
            font-family: ${theme.Merriweather};
            text-align: center;
            font-weight: 600;
        }
    }
    .partitura{
        width: 90%;
        height: 20%;
        margin: auto;
        background-image: url(${partitura});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 90%;
    }
    .boton-escuchar{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: flex-end;
        padding: 0 2rem;
        margin-bottom: 10%;
        img{
            width: 80px;
            &:hover{
                cursor: pointer;
            }
        }
    }

    .container-piano{
        width: 100%;
        height: 30%;
    }

    .texto-2{
        width: 100%;
        text-align: center;
        padding: 0 3rem;
        margin-top: 1rem;
        p{
            font-size: 1rem;
            font-family: ${theme.Merriweather};
            font-weight: 600;
            font-style: italic;
            color: ${theme.darkBlue};
            &:after{
                content: '';
                display: block;
                width: 100px;
                height: 1px;
                background: ${theme.darkBlue};
                text-align: center;
                margin: auto;
                margin-top: 1rem;
            }
            &:hover{
                cursor: pointer;
            } 
        }
       
    }
`