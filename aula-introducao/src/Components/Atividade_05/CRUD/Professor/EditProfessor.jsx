import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProfessor = () => {

    const professor = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState(professor.name);
    const [university, setUniversity] = useState(professor.university);
    const [degree, setDegree] = useState(professor.degree);


    const handleSubmit = (event) =>{
        event.preventDefault();
        let updatedProfessor = {
            name,
            university,
            degree,
        };
        axios.put(`http://localhost:3002/professors/update/${params._id}`, updatedProfessor)
            .then((res) => {
                navigate('/ListProfessor', {
                    message: `Professor editado com sucesso!`,
                });
                
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        axios
            .get(`http://localhost:3002/professors/retrieve/${params._id}`)
            .then((res) => {
                setName(res.data.name);
                setUniversity(res.data.university);
                setDegree(res.data.degree);


            })
            .catch((err) => console.log(err))
    }, [params._id]);

    

    return(
        <div>
            <h2>Edit Professor</h2>
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
                    <input type="submit" value="Editar Professor" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default EditProfessor;