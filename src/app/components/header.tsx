import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='fixed flex justify-between p-8 bg-cyan-500/25 w-screen'>
      <h1>NexClimate Portal</h1>
      <div className='w-1/5 flex justify-between'>
        <a href="/">Clima</a>
        <a href="/postalcode">Busca CEP</a>
        <a href="/weather">Contato</a>
      </div>
    </div>
  )
}

export default Header;
