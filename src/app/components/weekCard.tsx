import React from 'react';
import ForecastData from '../interfaces/forecastData';
import Image from 'next/image';
import RainIcon from '../../../public/images/rain-icon.png';

interface ItemForecast {
  item: ForecastData
}

const WeekCard: React.FC<ItemForecast> = ({ item }) => {
  return (
    <div className="flex flex-row sm:flex-col justify-between text-center bg-white/25 rounded-lg shadow-lg p-2 h-1/4 mt-auto mb-auto">
      <h1 className="text-black text-2xl font-light">{item.weekday}</h1>
      <p className="text-gray-600 font-light text-sm">{item.date}</p>
      <p className="text-gray-900 font-light text-sm">Max: {item.max}°C</p>
      <p className="text-gray-900 font-light text-sm">Min: {item.min}°C</p>
      <div className="flex justify-evenly p-1">
        <Image src={RainIcon} width={32} height={32} alt="rain icon" />
        <h2 className="text-gray-700 text-lg">{item.rain_probability}%</h2>
      </div>
    </div>
  );
}

export default WeekCard;
