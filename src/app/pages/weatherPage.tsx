import React, { useEffect } from 'react'
import Image from 'next/image'
import userWheather from '../api/userWheather'
import WeatherData from '../interfaces/weatherData'
import Header from '../components/header'
import RainIcon from '../../../public/images/rain-icon.png'

const DAYS_OF_WEEK = 7;

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null)
  const backgroundStyles = {
    backgroundImage: 'url(images/rain-clouds.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: '1',
    padding: '0',
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await userWheather()
        console.log(data)
        setWeatherData(data.results)
      } catch (error) {
        console.error('Error fetching weather data', error)
      }
    }

    fetchWeatherData()
  }, [])
  return (
    <>
      <Header />
      <div className="p-0 bg-cover h-screen" style={backgroundStyles}>
        {weatherData ? (
          <div className="flex">
            <div className="flex justify-center items-center h-screen w-1/3">
              <div className="bg-white/25 rounded-lg shadow-lg p-8">
                <h1 className="text-black text-3xl font-light">
                  {weatherData.city}
                </h1>
                <h2 className="text-gray-900 text-3xl font-light">
                  {weatherData.temp}°C
                </h2>
                <h2 className="text-gray-700 text-xl">
                  {weatherData.description}
                </h2>
                <p className="text-gray-700">
                  {weatherData.humidity}% Humidade
                </p>
                <p className="text-gray-700">
                  {weatherData.wind_speedy}
                </p>
              </div>
            </div>
            <div className="flex justify-evenly h-screen w-full">
              {weatherData.forecast.map((item, i) => i < DAYS_OF_WEEK && (
                <div key={item.weekday + i} className="flex flex-col justify-between text-center bg-white/25 rounded-lg shadow-lg p-2 h-1/4 mt-auto mb-auto">
                  <h1 className="text-black text-2xl font-light">
                    {item.weekday}
                  </h1>
                  <p className="text-gray-600 font-light text-sm">
                    {item.date}
                  </p>
                  <p className="text-gray-900 font-light text-sm">
                    Max: {item.max}°C
                  </p>
                  <p className="text-gray-900 font-light text-sm">
                    Min: {item.min}°C
                  </p>
                  <div className='flex justify-evenly p-1'>
                    <Image
                      src={RainIcon}
                      width={32}
                      height={32}
                      alt="rain icon"
                    />
                    <h2 className="text-gray-700 text-lg">
                      {item.rain_probability}%
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-gray-900 text-3xl font-bold">Loading...</h1>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WeatherPage
