import React, { useState, useEffect } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);
    const [status, setStatus] = useState('PAR');

    useEffect(
        ()=>{
            if(contador%2 == 0){
                setStatus('Par');
            }else{
                setStatus('Impar');
            }
        },
        [contador]
    )

    return(
        <div>
        <h2>Valor do contador: {contador}</h2>
        <h2>Par ou impar ?: {status}</h2>

        <button onClick={
            () => setContador(contador + 1)
        }>Aumentar contador</button>

        </div>
    )
}

export default Contador;