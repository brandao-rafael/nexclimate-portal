import React from 'react';
import WeatherData from '../interfaces/weatherData';
import TextInput from './textInput';

interface TodayCardProps {
  weatherData: WeatherData
}

const TodayCard: React.FC<TodayCardProps> = ({ weatherData }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-1/3">
      <div className="bg-white/25 rounded-lg shadow-lg p-8">
        <h1 className="text-black text-3xl font-light">{weatherData.city}</h1>
        <h2 className="text-gray-900 text-3xl font-light">
          {weatherData.temp}°C
        </h2>
        <h2 className="text-gray-700 text-xl">{weatherData.description}</h2>
        <p className="text-gray-700">{weatherData.humidity}% Humidade</p>
        <p className="text-gray-700">{weatherData.wind_speedy}</p>
      </div>
    </div>
  );
}

export default TodayCard;
