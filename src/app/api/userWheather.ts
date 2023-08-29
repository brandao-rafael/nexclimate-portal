import axios from 'axios';

const apiKey = process.env.HG_API_KEY || 'dffe03f9';

const userWheather: Function = async () => {
  return axios
    .get(`api/weather?key=${apiKey}&user_ip=remote`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export default userWheather;
