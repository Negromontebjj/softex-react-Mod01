import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <>
        <h1>Página Inicial</h1>
        <h2>
            <Link to="/sobre">Sobre</Link>
        </h2>
        <h2>
            <Link to="/usuario">Usuario</Link>
        </h2>
    </>
  );
}

export default Home;