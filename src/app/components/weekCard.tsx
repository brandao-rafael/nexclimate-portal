import React from 'react'
import ForecastData from '../interfaces/forecastData'
import Image from 'next/image'
import RainIcon from '../../../public/images/rain-icon.png'

interface ItemForecast {
  item: ForecastData
  weatherIconPath: string
}

const WeekCard: React.FC<ItemForecast> = ({ item, weatherIconPath }) => {
  return (
    <div
      className="
      flex
      flex-row
      sm:flex-col
      justify-between
      text-center
      bg-black/25
      rounded-lg
      shadow-lg
      p-3
      h-auto
      mt-auto
      mb-1
      sm:mb-auto
      xl:p-8
      w-full
      sm:w-auto
      "
    >
      <h1 className="text-white text-2xl font-light">{item.weekday}</h1>
      <Image src={weatherIconPath} width={64} height={64} alt="weather icon" />
      <p className="text-white/75 font-light text-sm">{item.date}</p>
      <div className='flex justify-around mt-1'>
        <Image src="/icons/max.png" alt="max temp" width={16} height={16}/>
        <p className="text-white/75 font-light text-sm">
          {item.max}°C
        </p>
      </div>
      <div className='flex justify-around mt-1'>
        <Image src="/icons/min.png" alt="min temp" width={16} height={16}/>
        <p className="text-white/75 font-light text-sm">
          {item.min}°C
        </p>
      </div>
      <div className="flex justify-between p-1 mt-1">
        <Image src={RainIcon} width={32} height={32} alt="rain icon" />
        <h2 className="text-white/75 text-lg">{item.rain_probability}%</h2>
      </div>
    </div>
  )
}

export default WeekCard
