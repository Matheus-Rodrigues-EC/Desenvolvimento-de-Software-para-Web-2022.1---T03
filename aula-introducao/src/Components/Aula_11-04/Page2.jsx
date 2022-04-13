import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Page2 = () => {
    let params = useParams();
    return(
        <div>
            <h1>Pagina 2</h1>
            <h3>Nome: {params.nome}</h3>
            <h3>ID: {params.id}</h3>
            <Link to="/">Voltar para Home</Link>

        </div>
    )
}

export default Page2;