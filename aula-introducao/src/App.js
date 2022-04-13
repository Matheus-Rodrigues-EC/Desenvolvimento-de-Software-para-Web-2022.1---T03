import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
//import { Component, React } from 'react';

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
import Page1 from './Components/Aula_11-04/Page1';
import Page2 from './Components/Aula_11-04/Page2';

//Utilizando rotas
function App(){
  return(
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>
          UFC
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link"> Home </Link>
            </li>

            <li className="navitem">
              <Link to="about" className="nav-link"> About </Link>
            </li>

            <li className="navitem">
              <Link to="page1" className="nav-link"> Page 1 </Link>
            </li>

            <li className="navitem">
              <Link to="page2/Matt/1179" className="nav-link"> Page 2 </Link>
            </li>
          </ul>
        </div>

      </nav>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='page1' element={<Page1/>} />
          <Route path='page2/:nome/:id' element={<Page2/>} />
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
