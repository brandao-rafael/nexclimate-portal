import axios from 'axios'

const apiKey = process.env.HG_API_KEY || "7e05297e" // api key exposta, porém não é um problema, pois é uma api gratuita e não possui dados sensíveis além de possuir regras no CORS

const userWheather = async () => {
  return axios
    .get(`https://api.hgbrasil.com/weather?format=json-cors&key=${apiKey}&user_ip=remote`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

const searchByCity = async (city: string) => {
  return axios
    .get(`https://api.hgbrasil.com/weather?format=json-cors&key=${apiKey}&city_name=${city}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export { userWheather, searchByCity }