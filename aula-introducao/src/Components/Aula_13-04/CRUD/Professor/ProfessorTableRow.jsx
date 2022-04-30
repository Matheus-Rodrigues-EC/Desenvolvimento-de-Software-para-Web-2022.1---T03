import React from "react";
import { Link } from "react-router-dom"

const ProfessorTableRow = (props) =>{
    const {id, name, university, degree} = props.professors;
    return(
        <tr>
            <td>
                {id}
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
                <Link to={`/EditProfessor/${id}`} className="btn btn-warning">Editar</Link>
            </td>
            <td>
                <Link to={`/EditProfessor/${id}`} className="btn btn-danger">Apagar</Link>
            </td>
        </tr>
    )
}

export default ProfessorTableRow;