import './App.css';
//import { Component, React } from 'react';
//import MeusDados from './Components/MeusDados';
//import MeusDadosProps from './Components/MeusDadosProps';
import Informacoes from './Components/Informacoes';

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
      <Informacoes/>
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
