import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";
import ScrollArea from './../View/ScrollArea';

function ListStudent() {

    const [students,setStudents] = useState([])
    //const [report, setReport] = useState('');
    //const [type, setType] = useState('success');
    const prev = useRef();

        useEffect(
            ()=>{
                if(prev.current === students) return;
                axios.get("http://localhost:3002/students/list")
                .then(
                    (res)=>{
                    res.current = res.data;
                    setStudents(res.data);
                    }   
                )
                .catch(
                    (error)=>{
                    console.log(error)
                    }
                )
            }, [students]
        )

    function deleteStudentsById(_id){
        setStudents(students.filter((student) => student._id !== _id));
        console.log('Delete Sucess');
    }

    function generateTable() {
        
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow student={student} key={i} 
                                        deleteStudentById={deleteStudentsById}
                        />

            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Student
                </h2>
                <ScrollArea>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>IRA</th>
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
    );
}

export default ListStudent