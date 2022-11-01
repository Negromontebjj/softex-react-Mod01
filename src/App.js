import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  return (
    <div className="App">
            <HelloWorld />
            <Frase />
            <Frase />
            <SayMyName nome = "Carlos"/>
            <Pessoas nome="Carlos" 
                      idade="37" 
                      profissao="Programador" 
                      foto = "https://almasurf.com.br/wp-content/uploads/2020/12/Untitled-2-5.jpg"/>
            <List />
    </div>
  );
}

export default App;
