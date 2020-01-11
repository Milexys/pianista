import styled from 'styled-components'

const ContainerHeader = styled.header`
    display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	padding: 0 1.3rem;
	z-index: 4;
	top: 0;
	background-color: ${props => props.active ? 'transparent' : 'white'};
	height: 50px;
    overflow: hidden;
    .logoLT{
        height: 100%;
        img {
		min-width: 120px;
		max-width: 120px;
		height: 100%;
		@media (max-width: 800px) {
			height: 100%;
			min-width: 120px;
		    }
	    }
    }
    .botones{
        width:auto;
        height: 100%;
        display: flex;
        .btn-suscribir {
		min-width: 120px;
		max-width: 120px;
        height: 100%;
        margin-right: 1rem;
		@media (max-width: 800px) {
			min-width: 120px;
		    }
	    }
    }
`

const MenuBtn = styled.button`
    min-width: 50px;
    max-width: 50px;
    height: 100%;
    background: transparent;
    border: none;
    @media (max-width: 800px) {
            min-width: 35px;
			max-width: 35px;
		    }
    &:focus{
        outline: none;
    }
    img{
     width: 50px;
     height: 40px;
     @media (max-width: 800px) {
            max-width: 35px;
            height: 30px;
		    }
    }
`

export { MenuBtn, ContainerHeader }