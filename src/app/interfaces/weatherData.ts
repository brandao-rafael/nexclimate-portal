import ForecastData from './forecastData'

interface WeatherData {
  cid: string
  city: string
  city_name: string
  cloudiness: number
  condition_code: string
  condition_slug: string
  cref: string
  currently: string
  date: string
  description: string
  forecast: ForecastData[] // Assuming you have a nested forecast array
  humidity: number
  img_id: string
  rain: number
  sunrise: string
  sunset: string
  temp: number
  time: string
  wind_direction: number
  wind_speedy: string
}

export default WeatherData
