import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProfessor = () => {

    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");

    const navigate = useNavigate();

    function handleChageName(e){
        setName(e.target.value);
    }

    function handleChangeUniversity(e){
        setUniversity(e.target.value);
    }

    function handleChangeDegree(e){
        setDegree(e.target.value);
    }

    const handleSubmit = (event) =>{
        //aqui é o código de comunicação com o Backend
        event.preventDefault();
        const professor = { name: name, university: university, degree: degree };

        axios.post('http://localhost:3002/professors/create', professor)
        .then((res)=> {
            navigate('/ListProfessor', {
                message: `Cadastro bem sucedido!`,
            });
        })
        .catch((erro) => console.log(erro));
    }

    return(
        <div>
            <h2>Create Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input  type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={handleChageName}
                    />
                </div>
                <div className="form-group">
                    <label>Universidade: </label>
                    <input  type="text"
                            className="form-control"
                            value={(university == null || university === undefined) ? "" : university}
                            name="university"
                            onChange={handleChangeUniversity}
                    />
                </div>
                <div className="form-group">
                    <label>Título: </label>
                    <input  type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={handleChangeDegree}
                    />
                </div>
                <div className="form-group" style={{paddingTop:10}} >
                    <input type="submit" value="Criar Professor" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateProfessor;