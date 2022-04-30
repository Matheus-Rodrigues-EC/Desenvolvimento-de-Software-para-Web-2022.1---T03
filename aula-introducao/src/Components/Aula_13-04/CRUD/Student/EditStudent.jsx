import React, { useState, useEffect } from "react";
import {students} from "./data.js";
import { useParams } from 'react-router-dom';

const EditStudent = () =>{

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState();

    const params = useParams();

    useEffect(
        ()=>{
            const student = students[params.id]
            setName(student.name)
            setCourse(student.course)
            setIra(student.ira)
        }, [params.id]
    )

    const handleSubmit = (event) => {
        //aqui é o código de comunicação com o Backend
        alert(` Nome: ${name}
                Curso: ${course}
                IRA: ${ira}`)
    }


    return(
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label>Nome: </label>
                    <input  type="text" 
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group" >
                    <label>Curso: </label>
                    <input  type="text" 
                            className="form-control"
                            value={(course == null || course === undefined) ? "" : course}
                            name="course"
                            onChange={(event) => setCourse(event.target.value)}
                    />
                </div>
                <div className="form-group" >
                    <label>IRA: </label>
                    <input  type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{paddingTop:10}} >
                    <input type="submit" value="Editar Estudante" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default EditStudent;