import React from "react";
import { students } from "./data.js";
import StudentTableRow from "./StudentTableRow";

const ListStudent = () =>{

    function generateTable(){
        if(students==null) return
        return students.map((student, i) =>{
            return <StudentTableRow students={student} key={i} />
            }
        )
    }

    return(
        <div>
            <h1>ListStudent</h1>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent;