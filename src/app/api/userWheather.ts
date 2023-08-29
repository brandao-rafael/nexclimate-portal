import axios from 'axios';

const apiKey = process.env.HG_API_KEY;

const userWheather: Function = async () => {
  return axios
    .get(`https://api.hgbrasil.com/weather?key=${apiKey}&user_ip=remote`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export default userWheather;
