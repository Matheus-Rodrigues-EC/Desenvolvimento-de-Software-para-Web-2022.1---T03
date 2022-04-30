import React, { useState } from "react";

const CreateProfessor = () => {

    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");

    const handleSubmit = (event) =>{
        alert(` Nome: ${name}
                Universidade: ${university}
                Título: ${degree}`);
    }

    return(
        <div>
            <h2>Create Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input  type="text"
                            className="form-control"
                            value={name ?? ""}
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Universidade: </label>
                    <input  type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => setUniversity(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Título: </label>
                    <input  type="text"
                            className="form-control"
                            value={degree ?? ""}
                            onChange={(event) => setDegree(event.target.value)}
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