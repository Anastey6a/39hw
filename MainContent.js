import React from 'react';
import Game from './Game';

const MainContent = () => {
  return (
    <main style={{ flex: 1, padding: '20px' }}>
      <h2>Ласкаво просимо!</h2>
      <Game />
    </main>
  );
};

export default MainContent;
