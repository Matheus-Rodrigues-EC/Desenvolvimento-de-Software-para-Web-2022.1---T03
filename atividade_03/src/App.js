import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import UFC from "./Components/Crud/IMG/UFC_brasao.png"
import CreateStudent from './Components/Crud/Student/CreateStudent';
import EditStudent from './Components/Crud/Student/EditStudent';
import ListStudent from './Components/Crud/Student/ListStudent';
import CreateProfessor from './Components/Crud/Professor/CreateProfessor';
import ListProfessor from './Components/Crud/Professor/ListProfessor';
import EditProfessor from './Components/Crud/Professor/EditProfessor';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

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
