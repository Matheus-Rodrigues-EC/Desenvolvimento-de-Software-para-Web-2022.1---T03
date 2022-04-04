import './App.css';
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
import World from './Components/Atividade_2/Questao1/World';
import Arena from './Components/Atividade_2/Questao1/Arena';
import MyHero from './Components/Atividade_2/Questao1/MyHero';
import MyEnemy from './Components/Atividade_2/Questao1/MyEnemy';


/*function App(){
  return(
    <div className='App'>
      <MeusDados/>
      <MeusDadosProps 
        nome ='Matt Rodrigues'
        curso ='Engenharia de Computação - UFC'
      />
    </div>
    
  )
}*/

function App(){
  return(
    <div className='App'>
      <World>
        <Arena ArenaName = 'Distrito da Luz'>
          <MyHero HeroName = "Uzui Tengen"/>
          <MyEnemy EnemyName = "Gyutaro"/>
        </Arena>
      </World>
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
