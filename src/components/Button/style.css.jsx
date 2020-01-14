import styled from 'styled-components';
import theme from "../../styles/theme.css";

export const BTN = styled.button`
    display: block;
    margin: auto;
    width: 200px;
    border: none;
    border-radius: 10px;
    background: ${theme.purple};
    color: white;
    font-size: 1.3rem;
    font-family: ${theme.Playfair};
    font-style: italic;
    padding: 5px 0;
`