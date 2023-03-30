import React from "react";
import './Button.css';

export default props => {
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';                              // se a a propriedade operation for passada detro da tag, add operation no className
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';
   
    return (
        <button 
            className={classes}
            onClick = {e => props.click && props.click(props.label)}>           {/*O && serve para so chamar a função se o elemento é verdadeiro (existe)*/}            
            {props.label}
        </button>
    )
}