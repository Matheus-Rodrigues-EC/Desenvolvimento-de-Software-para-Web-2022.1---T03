import React from "react";

const CidadeSimples = () => {
    let Fortaleza = 0;
    let Quixada = 0;
    let Russas = 0;
    let Sobral = 0;

    return(
        <div>
            <h3>Fortaleza: {Fortaleza}</h3>
            <h3>Quixadá: {Quixada}</h3>
            <h3>Russas: {Russas}</h3>
            <h3>Sobral: {Sobral}</h3>
            <button onClick={()=>Fortaleza++}>Votar em Fortaleza</button>
            <button onClick={()=>Quixada++}>Votar em Quixada</button>
            <button onClick={()=>Russas++}>Votar em Russas</button>
            <button onClick={()=>Sobral++}>Votar em Sobral</button>
        </div>
    )
}

export default CidadeSimples;