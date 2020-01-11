import styled from 'styled-components'
import theme from '../../../styles/theme.css'

export const ContainerNav = styled.nav`
width: 100%;
height: 100%;
padding-top: 70px;
ul{
    width: 100%;
    height: 100%;
    li{
    height: 20%;
    text-align: center;
        a{
        font-family: ${theme.Playfair};
        font-style: italic;
        font-size: 2.5rem;
        color: white;
        @media (max-width: 800px){
            font-size: 2rem;
        }
        &:after{
            content: "";
            display: block;
            width: 40%;
            height: 2px;
            background: white;
            margin: 2rem auto 0 auto;
        }
    }
  }
}
`