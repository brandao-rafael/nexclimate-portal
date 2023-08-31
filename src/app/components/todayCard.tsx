import React from 'react'
import WeatherData from '../interfaces/weatherData'
import Image from 'next/image'

interface TodayCardProps {
  weatherData: WeatherData;
  weatherIconPath: string;
}

const TodayCard: React.FC<TodayCardProps> = ({ weatherData, weatherIconPath }) => {
  return (
    <div className="flex flex-col self-center sm:self-start mt-5 sm:m-0 justify-center items-center h-auto sm:w-1/3 w-full">
      <div className="bg-black/25 rounded-lg shadow-lg p-8">
        <h1 className="text-white text-3xl font-light">{weatherData.city}</h1>
        <div className='flex'>
          <Image src={weatherIconPath} width={128} height={128} alt="sun" />
          <h2 className="text-white/75 text-3xl font-light mt-auto">
            {weatherData.temp}°C
          </h2>

        </div>
        <h2 className="text-white/75 text-xl">{weatherData.description}</h2>
        <p className="text-white/75">{weatherData.humidity}% Humidade</p>
        <p className="text-white/75">{weatherData.wind_speedy}</p>
      </div>
    </div>
  )
}

export default TodayCard
