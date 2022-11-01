import React, { useState, useEffect } from 'react';

function ExHooksBotao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <h3>Você clicou {count} vezes</h3>
      <button onClick={() => setCount(count + 1)}>
        Exercicio hoooks Softex Clique aqui Botão
      </button>
    </div>
  );
}

export default ExHooksBotao


