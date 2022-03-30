import React, { Component } from "react";
class CidadeComClasse extends Component {

    constructor(props){
        super(props)
        this.state = {Fortaleza:0, Quixada:0, Russas:0, Sobral:0}
    }

    VotarFortaleza(){
        this.setState({Fortaleza:this.state.Fortaleza+1});
    }
    VotarQuixada(){
        this.setState({Quixada:this.state.Quixada+1});
    }
    VotarRussas(){
        this.setState({Russas:this.state.Russas+1});
    }
    VotarSobral(){
        this.setState({Sobral:this.state.Sobral+1});
    }

    render(){
    return(
        <div>
            <h3>Fortaleza: {this.state.Fortaleza}</h3>
            <h3>Quixadá: {this.state.Quixada}</h3>
            <h3>Russas: {this.state.Russas}</h3>
            <h3>Sobral: {this.state.Sobral}</h3>
            <button onClick={()=> this.VotarFortaleza()}>Votar em Fortaleza</button>
            <button onClick={()=> this.VotarQuixada()}>Votar em Quixada</button>
            <button onClick={()=> this.VotarRussas()}>Votar em Russas</button>
            <button onClick={()=> this.VotarSobral()}>Votar em Sobral</button>
        </div>
        )
    }
}

export default CidadeComClasse;