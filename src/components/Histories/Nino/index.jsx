import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { BGImg, ScrollDiv } from './style.css';


const Nino = () => {
    const images = ["images/imagen1.jpg", "images/imagen2.jpg", "images/imagen3.jpg"]
    const [count, setCount] = useState(0)

    const nextImg = () => {
        setCount(count + 1)
    }

    const befImg = () => {
        setCount(count - 1)
    }

    return (
        <React.Fragment>
            <BGImg imagen={images[count]}>
                <ScrollDiv>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <Waypoint
                        onEnter={nextImg}
                        
                    />
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <Waypoint
                        onEnter={nextImg}
                     
                    />
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                    <div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, </span>
                    </div>
                </ScrollDiv>
            </BGImg>
            {/* <ContainerText>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, corporis, ab pariatur inventore quo. Exercitationem recusandae aut voluptatibus odio similique corporis maxime doloribus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, corporis, ab pariatur inventore quo. Exercitationem recusandae aut voluptatibus odio similique corporis maxime doloribus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique explicabo repudiandae dolor excepturi, enim delectus, corporis, ab pariatur inventore quo. Exercitationem recusandae aut voluptatibus odio similique corporis maxime doloribus.</p>
            </ContainerText> */}
        </React.Fragment>
    );
}

export default Nino;
