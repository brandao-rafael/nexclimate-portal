import axios from 'axios'

const apiKey = process.env.HG_API_KEY || "28a4a30c" // api key exposta, porém não é um problema, pois é uma api gratuita e não possui dados sensíveis além de possuir regras no CORS

const userWheather = async () => {
  return axios
    .get(`https://api.hgbrasil.com/weather?key=${apiKey}&user_ip=remote`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default userWheather
