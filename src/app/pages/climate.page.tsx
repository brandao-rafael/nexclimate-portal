import React from 'react'
import Header from '../components/header';
import WeatherCard from '../components/wheatherCard';

const ClimatePage: React.FC = () => {
  return (
    <div>
      <Header />
      <WeatherCard />
    </div>
  )
}

export default ClimatePage;
