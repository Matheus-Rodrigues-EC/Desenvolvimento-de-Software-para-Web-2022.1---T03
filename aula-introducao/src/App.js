import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

/*{
import About from './Components/Atividade_03/About';                                        // Componente da Atividade_03
import Home from './Components/Atividade_03/Home';                                          // Componente da Atividade_03
import UFC from "./Components/Atividade_03/CRUD/IMG/UFC_brasao.png";                        // Componente da Atividade_03
import CreateStudent from './Components/Atividade_03/CRUD/Student/CreateStudent';           // Componente da Atividade_03
import EditStudent from './Components/Atividade_03/CRUD/Student/EditStudent';               // Componente da Atividade_03
import ListStudent from './Components/Atividade_03/CRUD/Student/ListStudent';               // Componente da Atividade_03
import CreateProfessor from './Components/Atividade_03/CRUD/Professor/CreateProfessor';     // Componente da Atividade_03
import ListProfessor from './Components/Atividade_03/CRUD/Professor/ListProfessor';         // Componente da Atividade_03
import EditProfessor from './Components/Atividade_03/CRUD/Professor/EditProfessor';         // Componente da Atividade_03
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';                                // Componente da Atividade_03
import DropdownItem from 'react-bootstrap/esm/DropdownItem';                                // Componente da Atividade_03
}*/

import About from './Components/Atividade_05/About';                                        // Componente da Atividade_05
import Home from './Components/Atividade_05/Home';                                          // Componente da Atividade_05
import UFC from "./Components/Atividade_05/CRUD/IMG/UFC_brasao.png";                        // Componente da Atividade_05
import CreateStudent from './Components/Atividade_05/CRUD/Student/CreateStudent';           // Componente da Atividade_05
import EditStudent from './Components/Atividade_05/CRUD/Student/EditStudent';               // Componente da Atividade_05
import ListStudent from './Components/Atividade_05/CRUD/Student/ListStudent';               // Componente da Atividade_05
import CreateProfessor from './Components/Atividade_05/CRUD/Professor/CreateProfessor';     // Componente da Atividade_05
import ListProfessor from './Components/Atividade_05/CRUD/Professor/ListProfessor';         // Componente da Atividade_05
import EditProfessor from './Components/Atividade_05/CRUD/Professor/EditProfessor';         // Componente da Atividade_05
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';                                // Componente da Atividade_05
import DropdownItem from 'react-bootstrap/esm/DropdownItem';                                // Componente da Atividade_05

//<img src={UFC} alt="Logo Universidade Federal do Ceará"/>
//Utilizando rotas
function App(){
  return(
    <div className='container '>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand" style={{paddingLeft:5, paddingRight:10}}>
            <img src={UFC} alt="Logo Universidade Federal do Ceará" style={{width:100}}/>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mr-auto">

              <li className="navitem">
                <Link to="/" className="nav-link"> Home </Link>
              </li>

              <li className="navitem">
                <Link to="Sobre" className="nav-link"> Sobre </Link>
              </li>

              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} >
                  Estudante
                </Dropdown.Toggle>

                <DropdownMenu className='bg-dark'>
                  <DropdownItem className='navbar-dark bg-dark'>
                    <Link to="CreateStudent" className="nav-link">Criar Estudante</Link>
                  </DropdownItem>
                  <DropdownItem className='navbar-dark bg-dark'>
                    <Link to="ListStudent" className="nav-link">Listar Estudantes</Link>
                  </DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>

              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Professor
                </Dropdown.Toggle>

                <DropdownMenu className='bg-dark'>
                  <DropdownItem className='navbar-dark bg-dark'>
                    <Link to="CreateProfessor" className="nav-link">Criar Professor</Link>
                  </DropdownItem>
                  <DropdownItem className='navbar-dark bg-dark'>
                    <Link to="ListProfessor" className="nav-link">Listar Professores</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              
              
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Sobre' element={<About/>} />
          <Route path='CreateStudent' element={<CreateStudent/>} />
          <Route path='ListStudent/' element={<ListStudent/>} />
          <Route path='EditStudent/:_id' element={<EditStudent/>} />
          <Route path='CreateProfessor' element={<CreateProfessor/>} />
          <Route path='ListProfessor/' element={<ListProfessor/>} />
          <Route path='EditProfessor/:_id' element={<EditProfessor/>} />
        </Routes>
    </div>
    
  )
}


export default App;
