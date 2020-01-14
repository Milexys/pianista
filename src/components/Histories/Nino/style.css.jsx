import styled from 'styled-components';
import theme from '../../../styles/theme.css'


const BGImg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imagen});
    background-size: cover;
    background-position: left bottom;
    opacity: 0.9;
    position: fixed;
    div{
        height: 100%;
        text-align: center;
        padding: 0 1.5rem;
        span{
            background: rgba(0,0,0,0.6);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            font-family: ${theme.Playfair};
            font-style: italic;
            line-height: 1.5rem;
        }
    }
 
`
const ScrollDiv = styled.div`
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`

export { ScrollDiv, BGImg}