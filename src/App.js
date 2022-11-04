import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';
import ExHooksBotao from './components/ExHooksBotao';
import React from 'react';
import Routes from './routes'


function App() {
  return (
    <div className="App">
            <ExHooksBotao />
            <HelloWorld />
            <Frase />
            <Frase />
            <SayMyName nome = "Carlos"/>
            <Pessoas nome="Carlos" 
                      idade="37" 
                      profissao="Programador" 
                      foto = "https://almasurf.com.br/wp-content/uploads/2020/12/Untitled-2-5.jpg"/>
            <List />
            <Routes/>
    </div>
  );
}

export default App;
