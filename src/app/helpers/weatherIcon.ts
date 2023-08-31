const weatherIcons: { [key: string]: number[] } = {
  storm: [0, 1, 3, 4, 35, 37, 38, 39, 45, 47],
  tornado: [2],
  snow: [5, 6, 7, 10, 13, 14, 15, 16, 17, 18, 41, 42, 43, 46],
  sun_rain: [40],
  sun_fog: [8, 25],
  drizzle: [9, 11, 12],
  cloud_fog: [19, 20, 21, 22],
  wind: [23, 24],
  cloud: [26, 28, 44],
  sun_cloud: [29, 30, 34],
  sun: [27, 31, 32, 33, 36],
}

const getWeatherIcon = (conditionCode: number): string => {
  for (let icon in weatherIcons) {
    if (weatherIcons[icon].includes(conditionCode)) {
      return `/icons/${icon}.png`
    }
  }
  return '/icons/sun_cloud.png'
}

const getWeatherIconBySlug = (condition: string) => {
  switch (condition) {
    case 'clear_day':
    case 'clear_night':
      return '/icons/sun.png'
    case 'cloud':
    case 'cloudly_day':
    case 'cloudly_night':
      return '/icons/cloud.png'
    case 'rain':
    case 'hail':
      return '/icons/rain.png'
    case 'fog':
      return '/icons/sun_fog.png'
    case 'storm':
      return '/icons/storm.png'
    case 'snow':
      return '/icons/snow.png'
    default:
      return '/icons/sun_cloud.png'
  }
}

export { getWeatherIcon, getWeatherIconBySlug }
