import React from "react";

/*function Questao1(){
    return(
        <div>
            <h1>Matt Rodrigues</h1>
            <h1>Engenharia de Computação</h1>
            <h1>Paraipaba-CE</h1>
        </div>
    )
}*/

/*const Questao1 = (props) => {
    return(
        <div>
            <h1>Questão 1</h1>
            <h3>Nome: {props.nome}</h1>
            <h3>Curso: {props.curso}</h3>
            <h3>Cidade: {props.cidade}</h3>
        </div>
    )
}*/

const Questao1 = (props) => {
    console.log(props)
    const { nome, curso, cidade} = props;
    return(
        <div>
            <h1>Questão 3</h1>
            <h3>Nome: {nome}</h3>
            <h3>Curso: {curso}</h3>
            <h3>Cidade: {cidade}</h3>
        </div>
    )
}



export default Questao1;