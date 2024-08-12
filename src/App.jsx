import './App.css';
import React, { useState } from 'react';

function Jokenpo() {
  const [jogadaUsuario, setjogadaUsuario] = useState('');
  const [jogadaMaquina, setjogadaMaquina] = useState('');
  const [pontosUsuario, setpontosUsuario] = useState(0);
  const [pontosMaquina, setpontosMaquina] = useState(0);
  const [Resultado, setResultado] = useState('');
  const [botaoClicado, setBotaoClicado] = useState('');

  const choices = ['pedra', 'papel', 'tesoura'];

  const BotaoClicadoUsuario = (choice) => {
    setBotaoClicado(choice);

    const randomIndex = Math.floor(Math.random() * 3);
    const jogadaMaquina = choices[randomIndex];

    setjogadaUsuario(choice);
    setjogadaMaquina(jogadaMaquina);

    if (choice === jogadaMaquina) {
      setResultado('Empate');
    } else if (
      (choice === 'pedra' && jogadaMaquina === 'tesoura') ||
      (choice === 'papel' && jogadaMaquina === 'pedra') ||
      (choice === 'tesoura' && jogadaMaquina === 'papel')
    ) {
      setResultado('Você ganhou!');
      setpontosUsuario(pontosUsuario + 1);
    } else {
      setResultado('Você perdeu!');
      setpontosMaquina(pontosMaquina + 1);
    }
  };

  const resetGame = () => {
    setjogadaUsuario('');
    setjogadaMaquina('');
    setResultado('');
    setpontosUsuario(0);
    setpontosMaquina(0);
    setBotaoClicado('');
  };

  return (
    <>
      <section>
        <div>
          <p>Placar:</p>
          <div className='placar'>
            <div>
              <p>Seus pontos</p>
              <h1>{pontosUsuario}</h1>
            </div>
            <div>
              <p>Pontos da máquina</p>
              <h1>{pontosMaquina}</h1>
            </div>
          </div>
        </div>
      </section>

      <article>
        <div>
          <p>Você escolheu</p>
          <div className='botoes'>
            <button
              className={botaoClicado === 'pedra' ? 'botaoAtivo' : ''}
              onClick={() => BotaoClicadoUsuario('pedra')}
            >
              pedra
            </button>
            <button
              className={botaoClicado === 'papel' ? 'botaoAtivo' : ''}
              onClick={() => BotaoClicadoUsuario('papel')}
            >
              papel
            </button>
            <button
              className={botaoClicado === 'tesoura' ? 'botaoAtivo' : ''}
              onClick={() => BotaoClicadoUsuario('tesoura')}
            >
              tesoura
            </button>
          </div>
        </div>

        <div>
          <h2>Resultado</h2>
          <p>{Resultado}</p>
          <button onClick={resetGame}>Jogar Novamente</button>
        </div>

        <div>
          <p>A máquina escolheu</p>
          <h1>{jogadaMaquina}</h1>
        </div>
      </article>
    </>
  );
}

export default Jokenpo;
