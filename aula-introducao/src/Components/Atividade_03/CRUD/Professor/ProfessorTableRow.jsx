import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfessorTableRow({professors: { _id, name, university, degree }, deleteProfessorById}){

    function deleteProfessor(){
        if(window.confirm(`Você deseja excluir o professor ${name} ?`))
        axios.delete(`http://localhost:3002/professors/delete/${_id}`)
        .then(()=> {
            console.log(`O registro do Professor ${name}, de ID ${_id} foi excluído com sucesso.`);
            deleteProfessorById(_id);
        })
        .catch((erro)=> console.log(erro));
    };


    return(
        <tr>
            <td>
                {_id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td>
                <Link to={`/EditProfessor/${_id}`} className="btn btn-warning">Editar</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteProfessor}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow;