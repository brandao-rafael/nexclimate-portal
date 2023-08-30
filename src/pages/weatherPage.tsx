import React, { useEffect } from 'react';
import userWheather from '../app/api/userWheather';
import WeatherData from '../app/interfaces/weatherData';
import Header from '../app/components/header';
import TodayCard from '../app/components/todayCard';
import WeekCard from '../app/components/weekCard';

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
            <TodayCard weatherData={weatherData} />
            <div className="flex justify-evenly h-screen w-full">
              {weatherData.forecast.map((item, i) => i < DAYS_OF_WEEK && (
                <WeekCard key={item.date} item={item} />
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

export default WeatherPage;
