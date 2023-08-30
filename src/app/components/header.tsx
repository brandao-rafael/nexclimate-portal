import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 flex flex-col md:flex-row justify-center md:justify-between p-8 bg-black/50 w-screen">
      <h1 className="text-white font-bold text-2xl self-center">
        NexClimate Portal
      </h1>
      <div className="w-5/6 sm:w-1/3 flex self-center mt-2 justify-between text-white">
        <Link href="/">Clima</Link>
        <Link href="/postalCode">Busca CEP</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </header>
  )
}

export default Header
