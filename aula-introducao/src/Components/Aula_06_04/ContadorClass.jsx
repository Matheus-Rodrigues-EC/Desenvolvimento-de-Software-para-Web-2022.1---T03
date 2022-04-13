import React, { Component } from "react";

class ContadorClass extends Component{
    constructor(props){
        super(props)
        this.state = {contador: 0}
    }

    render(){
        return(
            <div>
                <h2>Valor do Contador: {this.state.contador}</h2>
                <button onClick={() => this.state({contador:this.state.contador + 1})}>Aumentar contador</button>
            </div>
        )
    }
}

export default ContadorClass;