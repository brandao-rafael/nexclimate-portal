import axios from 'axios'
import {
  PostalAddress,
  PostalAddressError,
} from '../interfaces/postalInterfaces'

class CepServices {
  static async searchPostalCode(
    postalCode: string,
  ): Promise<PostalAddress | PostalAddressError> {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`,
        { headers: { 'Content-Type': 'application/json' } },
      )
      return response.data
    } catch (error) {
      return { erro: true }
    }
  }
}

export default CepServices
