import React, { Component } from "react";

/*class Questao2 extends Component {
    render() {
        return(
            <div>
                <h1>Questão 2</h1>
                <h3>Nome: Matt Rodrigues</h3>
                <h3>Curso: Engenharia de Computação</h3>
                <h3>Cidade: Paraipaba-CE</h3>
            </div>
        )
    }
}*/

class Questao2 extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
        
    render() {
        const {nome, curso, cidade} = this.props
        return(
            <div>
                <h1>Questão 4</h1>
                <h3>Nome: {nome}</h3>
                <h3>Curso: {curso}</h3>
                <h3>Cidade: {cidade}</h3>
            </div>
        )
    }
}

export default Questao2;