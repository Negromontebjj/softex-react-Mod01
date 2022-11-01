import React, { useState, useEffect } from 'react';

function ExHooksBotao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Exercicio Softex Clique aqui Botão
      </button>
    </div>
  );
}

export default ExHooksBotao


