import React from 'react';
import { BTN } from './style.css';

const Button = (props) => {
    return ( 
        <BTN>
            {props.title}
        </BTN>
     );
}
 
export default Button;