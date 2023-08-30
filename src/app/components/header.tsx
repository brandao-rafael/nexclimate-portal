import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 flex justify-between p-8 bg-black/50 w-screen'>
      <h1 className='text-white font-bold text-2xl'>NexClimate Portal</h1>
      <div className='w-1/5 flex justify-between text-white'>
        <Link href="/">Clima</Link>
        <Link href="/postalCode">Busca CEP</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </header>
  )
}

export default Header;
