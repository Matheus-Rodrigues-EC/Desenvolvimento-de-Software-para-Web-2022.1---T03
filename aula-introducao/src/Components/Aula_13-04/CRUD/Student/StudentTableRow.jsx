import React from "react";
import { Link } from "react-router-dom"

const StudentTableRow = (props) =>{
    const {id, name, course, ira} = props.students;
    return(
        <tr>
            <td>
                {id}
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
                <Link to={`EditStudent/${id}`} className="btn btn-warning">Editar</Link>
            </td>
            <td>
                <Link to={`EditStudent/${id}`} className="btn btn-danger">Apagar</Link>
            </td>
        </tr>
    )
}

export default StudentTableRow;