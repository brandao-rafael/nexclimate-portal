import axios from 'axios'

const apiKey = process.env.HG_API_KEY || "7e05297e" // api key exposta, porém não é um problema, pois é uma api gratuita e não possui dados sensíveis

const userWheather = async () => {
  return axios
    .get(`api/weather?key=${apiKey}&user_ip=remote`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default userWheather
