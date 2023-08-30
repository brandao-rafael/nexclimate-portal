import CepServices from '@/app/api/cepServices'
import '../app/globals.css'
import Header from '@/app/components/header'
import TextInput from '@/app/components/textInput'
import React, { useState } from 'react'

const PostalCode: React.FC = () => {
  const [address, setAddress] = useState({})
  const [hasError, setHasError] = useState(false)

  const searchPostalCode = async (postalCode: string) => {
    try {
      const result = await CepServices.searchPostalCode(postalCode)
      setAddress(result)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      <Header />
      <TextInput
        submit={searchPostalCode}
        placeholder="Informe o CEP"
        validation={true}
      />
    </div>
  )
}

export default PostalCode
