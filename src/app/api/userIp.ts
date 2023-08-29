import axios from 'axios';

const userIp: Function = async (): Promise<string> => {
  const response = await axios.get('https://api.ipify.org?format=json');
  const { data } = response;
  return data.ip;
}

export default userIp;
