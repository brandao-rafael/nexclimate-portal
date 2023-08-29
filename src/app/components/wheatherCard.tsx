import React, { useEffect } from 'react'
import userWheather from '../api/userWheather'
import WeatherData from '../interfaces/weatherData';

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);
  const backgroundStyles = {
    backgroundImage: 'url(images/rain-clouds.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: '1',
    padding: '0',
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await userWheather();
        console.log(data);
        setWeatherData(data.results);
      } catch (error) {
        console.error('Error fetching weather data', error)
      }
    }

    fetchWeatherData()
  }, []);
  return (
    <div className="p-0 bg-cover h-screen" style={backgroundStyles}>
    {
        weatherData ? (
            <div className="flex justify-center items-center h-full w-1/3">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-gray-900 text-3xl font-light">{weatherData.city}</h1>
                    <h2 className="text-gray-700 text-3xl font-light">{weatherData.temp}°C</h2>
                    <h2 className="text-gray-600 text-xl">{weatherData.description}</h2>
                    <p className="text-gray-600">{weatherData.humidity}% humidity</p>
                    <p className="text-gray-600">{weatherData.wind_speedy} km/h wind</p>
                </div>
            </div>
        ) : (
            <div className="flex justify-center items-center h-full">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-gray-900 text-3xl font-bold">Loading...</h1>
                </div>
            </div>
        )
    }
    </div>
  )
}

export default WeatherCard;
