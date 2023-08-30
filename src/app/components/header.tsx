import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 flex justify-between p-8 bg-cyan-500/25 w-screen'>
      <h1>NexClimate Portal</h1>
      <div className='w-1/5 flex justify-between'>
        <Link href="/">Clima</Link>
        <Link href="/postalCode">Busca CEP</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </header>
  )
}

export default Header;
