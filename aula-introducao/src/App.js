import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
//import { Component, React } from 'react';
import { Dropdown, NavItem, NavLink } from "react-bootstrap";


//import MeusDados from './Components/MeusDados';
//import MeusDadosProps from './Components/MeusDadosProps';
//import Informacoes from './Components/Informacoes';
//import Questao1 from './Components/Atividade_1/Questao1';
//import Questao2 from './Components/Atividade_1/Questao2';
//import Questao3 from './Components/Atividade_1/Questao3';
//import Questao4 from './Components/Atividade_1/Questao4';
//import IMC from './Components/Atividade_2__IMC/IMC';
//import CidadeSimples from './Components/Cidades/CidadeSimples';
//import CidadeComClasse from './Components/Cidades/CidadeComClasse';
//import World from './Components/Atividade_2/Questao1/World';
//import Arena from './Components/Atividade_2/Questao1/Arena';
//import MyHero from './Components/Atividade_2/Questao1/MyHero';
//import MyEnemy from './Components/Atividade_2/Questao1/MyEnemy';
//import Contador from './Components/Aula_06_04/Contador';
//import ContadorClass from './Components/Aula_06_04/ContadorClass';
import About from './Components/Aula_11-04/About';
import Home from './Components/Aula_11-04/Home';
//import Page1 from './Components/Aula_11-04/Page1';
//import Page2 from './Components/Aula_11-04/Page2';
import UFC from "./Components/Aula_13-04/IMG/UNIVERSIDADE FEDERAL DO CEARÁ.png"
import CreateStudent from './Components/Aula_13-04/CRUD/Student/CreateStudent';
import EditStudent from './Components/Aula_13-04/CRUD/Student/EditStudent';
import ListStudent from './Components/Aula_13-04/CRUD/Student/ListStudent';
import CreateProfessor from './Components/Aula_13-04/CRUD/Professor/CreateProfessor';
import ListProfessor from './Components/Aula_13-04/CRUD/Professor/ListProfessor';
import EditProfessor from './Components/Aula_13-04/CRUD/Professor/EditProfessor';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

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
          <Route path='EditStudent/:id' element={<EditStudent/>} />
          <Route path='CreateProfessor' element={<CreateProfessor/>} />
          <Route path='ListProfessor/' element={<ListProfessor/>} />
          <Route path='EditProfessor/:id' element={<EditProfessor/>} />
        </Routes>
    </div>
    
  )
}


// Criando uma função clássica 

/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MeusDados/>
    </div>
  );
}*/

// Constante que recebe uma função Arrow
/*const App = ( ) =>{
    return (<div className="App">
            <h1>Hello World!</h1>
            </div>
            );
 }*/

// Constante que recebe Arrow function de uma só linha
/*const App = ( ) =>
          <div className="App">
          <h1>Hello World!</h1>
          </div>
*/

/*class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}*/

export default App;
