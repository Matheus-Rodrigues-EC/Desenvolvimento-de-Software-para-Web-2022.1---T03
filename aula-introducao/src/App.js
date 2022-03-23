import './App.css';
//import { Component, React } from 'react';
//import MeusDados from './Components/MeusDados';
//import MeusDadosProps from './Components/MeusDadosProps';
//import Informacoes from './Components/Informacoes';

//import Questao1 from './Components/Atividade_1/Questao1';
//import Questao2 from './Components/Atividade_1/Questao2';
//import Questao3 from './Components/Atividade_1/Questao3';
import Questao4 from './Components/Atividade_1/Questao4';

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
      <Questao4/>
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
