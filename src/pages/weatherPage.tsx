import React, { useEffect } from 'react'
import userWheather from '../app/api/userWheather'
import WeatherData from '../app/interfaces/weatherData'
import Header from '../app/components/header'
import TodayCard from '../app/components/todayCard'
import WeekCard from '../app/components/weekCard'
import { log } from 'console'

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

  const weatherIcons: { [key: string]: number[] } = {
    storm: [0, 1, 3, 4, 35, 37, 38, 39, 45, 47],
    tornado: [2],
    snow: [5, 6, 7, 10, 13, 14, 15, 16, 17, 18, 41, 42, 43, 46],
    sun_rain: [40],
    sun_fog: [8, 25],
    drizzle: [9, 11, 12],
    fog: [19, 20, 21, 22],
    wind: [23, 24],
    cloud: [26, 28, 44],
    sun_cloud: [29, 30, 34],
    sun: [27, 31, 32, 33, 36],
  };
  
  const getWeatherIcon = (conditionCode: number): string => {
    for (let icon in weatherIcons) {
      if (weatherIcons[icon].includes(conditionCode)) {
        return `/icons/${icon}.png`;
      }
    }
    return '/icons/sun_cloud.png';
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
            <div className="flex flex-col sm:flex-row mt-10 mb-2 sm:mb-0 sm:mt-0 justify-evenly sm:h-screen h-auto sm:w-full w-5/6 self-center">
              {weatherData.forecast.map(
                (item, i) =>
                  i < DAYS_OF_WEEK && <WeekCard key={item.date} item={item} />,
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
