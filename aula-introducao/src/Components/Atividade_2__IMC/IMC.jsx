import React from "react";

const IMC = (props) =>{

    function CalculoIMC(altura = 1.73, peso = 74){
        return peso/(altura * altura)   
    }

    return(
        <div>
        <h1>
            Cálculo do IMC.
        </h1>
        <h2>
            A altura é: {props.altura} 
            &nbsp; O peso é: {props.peso}
        </h2>
        <h2>
            O IMC é: {CalculoIMC(props.altura, props.peso)}
        </h2>
        </div>
    )
        
}



export default IMC;