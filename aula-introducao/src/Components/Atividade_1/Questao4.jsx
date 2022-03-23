import React, { Component } from "react";
import Questao2 from "./Questao2";
import 'bootstrap/dist/css/bootstrap.min.css'

class Questao4 extends Component{
    render(){
        return(
            <div>
                <Questao2
                    nome = "Matt"
                    curso = "EC"
                    cidade = "PBA - CE"
                />
            </div>
        )
    }
}

export default Questao4;