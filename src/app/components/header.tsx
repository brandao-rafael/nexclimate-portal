import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 flex flex-col md:flex-row justify-center md:justify-between p-6 bg-black/50 w-screen">
      <h1 className="text-white font-thin text-2xl self-center">
        NexClimate Portal
      </h1>
      <div className="w-5/6 sm:w-1/5 flex justify-between self-center text-white">
        <Link className='font-thin hover:text-blue-300 hover:font-bold hover:animate-pulse transition-all' href="/">Clima</Link>
        <Link className='font-thin hover:text-blue-300 hover:font-bold hover:animate-pulse transition-all' href="/postalCode">Busca CEP</Link>
        <Link className='font-thin hover:text-blue-300 hover:font-bold hover:animate-pulse transition-all' href="/contact">Contato</Link>
      </div>
    </header>
  )
}

export default Header
