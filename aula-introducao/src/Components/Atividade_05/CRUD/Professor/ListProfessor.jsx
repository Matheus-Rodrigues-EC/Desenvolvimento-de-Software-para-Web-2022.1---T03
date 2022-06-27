import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfessorTableRow from "./ProfessorTableRow";
import ScrollArea from '../View/ScrollArea';

function ListProfessor(){

    const [professors, setProfessors] = useState([]);
    //const [report, setReport] = useState('');
    //const [type, setType] = useState('success');
    const prev = useRef();

    useEffect(
        ()=>{
            if(prev.current !== professors) return;
            axios.get("http://localhost:3002/professors/list")
            .then(
                (res)=>{
                    res.current = res.data;
                    setProfessors(res.data);
                }   
            )
            .catch(
                (error)=>{
                console.log(error)
                }
            )
        }, [professors]
    )

    function deleteProfessorsById(_id){
        setProfessors(professors.filter((professor) => professor._id !== _id));
        console.log('Delete Sucess');
    }

    function generateTable(){

        if(!professors) return
        return professors.map(
            (professor, i) =>{
                return <ProfessorTableRow   professors={professor} key={i} 
                                            deleteProfessorsById={deleteProfessorsById}
                        />
            }
        )
    }

    return(
        <>
            <main>
                <h2>
                    List Professor
                </h2>
                <ScrollArea size={10}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>University</th>
                                <th>Degree</th>
                                <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generateTable()}
                        </tbody>
                    </table>
                </ScrollArea>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default ListProfessor;