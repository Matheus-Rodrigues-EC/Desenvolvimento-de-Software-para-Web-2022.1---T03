import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = (props) =>{

    const student = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState(student.name);
    const [course, setCourse] = useState(student.course);
    const [ira, setIra] = useState(student.ira);

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedStudent = {
            name,
            course,
            ira,
        };
        axios.put(`http://localhost:3002/students/update/${params._id}`, updatedStudent)
            .then((res) => {
                navigate('/ListStudent', {
                    message: `Estudante editado com sucesso!`,
                });
                
            })
            .catch((err) => console.log(err));
    };
 
    useEffect(() => {
        axios
            .get(`http://localhost:3002/students/retrieve/${params._id}`)
            .then((res) => {
                setName(res.data.name);
                setCourse(res.data.course);
                setIra(res.data.ira);

            })
            .catch((err) => console.log(err));
    }, [params._id]);


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