import React from "react";
import { professors } from "./data.js";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessor = () =>{

    function generateTable(){
        if(professors==null) return
        return professors.map((professor, i) =>{
            return <ProfessorTableRow professors={professor} key={i} />
            }
        )
    }

    return(
        <div>
            <h2>List Professor</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Título</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ListProfessor;