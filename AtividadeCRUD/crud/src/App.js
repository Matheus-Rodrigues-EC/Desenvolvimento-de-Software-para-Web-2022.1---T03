import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Dropdown, NavItem, NavLink } from "react-bootstrap";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import UFC from './Components/brasao3_horizontal_cor_300dpi.png';

import Home from './Components/Home.jsx';
import Edit from './Components/Edit.jsx';
import Create from './Components/Create.jsx';
import List from './Components/List.jsx';


function App() {
  return (
    <div className='container'>

<nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
                <Link to="Create" className="nav-link"> Create </Link>
              </li>

              <li className="navitem">
                <Link to="Edit" className="nav-link"> Edit </Link>
              </li>

              <li className="navitem">
                <Link to="List" className="nav-link"> List </Link>
              </li>

              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} >
                  Estudante
                </Dropdown.Toggle>

                <DropdownMenu className='bg-light'>
                  <DropdownItem className='navbar-light bg-light'>
                    <Link to="CreateStudent" className="nav-link">Criar Estudante</Link>
                  </DropdownItem>
                  <DropdownItem className='navbar-light bg-light'>
                    <Link to="ListStudent" className="nav-link">Listar Estudantes</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Professor
                </Dropdown.Toggle>

                <DropdownMenu className='bg-light'>
                  <DropdownItem className='navbar-light bg-light'>
                    <Link to="CreateProfessor" className="nav-link">Criar Professor</Link>
                  </DropdownItem>
                  <DropdownItem className='navbar-light bg-light'>
                    <Link to="ListProfessor" className="nav-link">Listar Professores</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              
              
            </ul>
          </div>
        </div>
      </nav>
              

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Edit' element={<Edit/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/List/' element={<List/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
