import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateStudent = () =>{

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const navigate = useNavigate();
    
    function handleChageName(e){
        setName(e.target.value);
    }

    function handleChangeCourse(e){
        setCourse(e.target.value);
    }

    function handleChangeIra(e){
        setIra(e.target.value);
    }

    const handleSubmit = (event) => {
        //aqui é o código de comunicação com o Backend
        event.preventDefault();
        const student = { name: name, ira: ira, course: course };

        axios.post('http://localhost:3002/students/create', student)
        .then((res)=> {
            navigate('/ListStudent', {
                message: `Cadastro bem sucedido!`,
            });
        })
        .catch((erro) => console.log(erro));
    }


    return(
        <div>
            <h2>Create Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label>Nome: </label>
                    <input  type="text" 
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={handleChageName}
                    />
                </div>
                <div className="form-group" >
                    <label>Curso: </label>
                    <input  type="text" 
                            className="form-control"
                            value={(course == null || course === undefined) ? "" : course}
                            name="course"
                            onChange={handleChangeCourse}
                    />
                </div>
                <div className="form-group" >
                    <label>IRA: </label>
                    <input  type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={handleChangeIra}
                    />
                </div>
                <div className="form-group" style={{paddingTop:10}} >
                    <input type="submit" value="Criar Estudante" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateStudent;