import React from "react";
import { Link } from "react-router-dom"
import axios from "axios";

function StudentTableRow({student: { _id, name, course, ira }, deleteStudentById}){

    function deleteStudent(){
        if(window.confirm(`Você deseja excluir o estudante ${name} ?`))
        axios.delete(`http://localhost:3002/students/delete/${_id}`)
        .then(()=> {
            console.log(`O registro do Aluno ${name}, de ID ${_id} foi excluído com sucesso.`);
            deleteStudentById(_id);
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
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td>
                <Link to={`/EditStudent/${_id}`} className="btn btn-warning">Editar</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteStudent}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow;