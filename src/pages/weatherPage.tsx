import React, { useEffect } from 'react'
import userWheather from '../app/api/userWheather'
import WeatherData from '../app/interfaces/weatherData'
import Header from '../app/components/header'
import TodayCard from '../app/components/todayCard'
import WeekCard from '../app/components/weekCard'
import { getWeatherIcon, getWeatherIconBySlug } from '@/app/helpers/weatherIcon'

const DAYS_OF_WEEK = 7

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null)
  const [backgroundImage, setBackgroundImage] = React.useState<string>(
    'images/clear-sky.jpg',
  )

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
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

        if (data.results.condition_slug.includes('cloud')) {
          setBackgroundImage('images/rain-clouds.jpg')
        } else if (data.results.condition_slug.includes('storm')) {
          setBackgroundImage('images/storm.jpg')
        } else {
          setBackgroundImage('images/clear-sky.jpg')
        }
        if (data.results === undefined) {
          return
        }
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
      <div className="p-0 bg-cover h-full sm:h-screen" style={backgroundStyles}>
        {weatherData ? (
          <div className="flex flex-col sm:flex-row">
            <TodayCard weatherData={weatherData} weatherIconPath={getWeatherIcon(parseInt(weatherData.condition_code))}/>
            <div className="flex flex-col sm:flex-row mt-10 mb-2 sm:mb-0 sm:mt-0 justify-evenly sm:h-screen h-auto sm:w-full w-11/12 self-center">
              {weatherData.forecast.map(
                (item, i) =>
                  i < DAYS_OF_WEEK && <WeekCard key={item.date} item={item} weatherIconPath={getWeatherIconBySlug(item.condition)} />,
              )}
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
