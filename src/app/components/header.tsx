import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='flex justify-between p-8 bg-cyan-500'>
      <h1>NexClimate Portal</h1>
      <div className='w-1/5 flex justify-between'>
        <a href="/">Climate</a>
        <a href="/postalcode">Postal code</a>
        <a href="/weather">Contact</a>
      </div>
    </div>
  )
}

export default Header
