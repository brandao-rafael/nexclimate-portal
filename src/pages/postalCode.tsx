import CepServices from '@/app/api/cepServices'
import '../app/globals.css'
import Header from '@/app/components/header'
import TextInput from '@/app/components/textInput'
import React, { useState } from 'react'
import { PostalAddress } from '@/app/interfaces/postalInterfaces'
import CepResultContainer from '@/app/components/cepResultContainer'


const PostalCode: React.FC = () => {
  const backgroundStyles = {
    backgroundImage: 'url(images/map.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: '1',
    padding: '0',
  }

  const [address, setAddress] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  } as PostalAddress);

  const [hasError, setHasError] = useState(false)

  const searchPostalCode = async (postalCode: string) => {
    try {
      const result = await CepServices.searchPostalCode(postalCode)
      if (Object.keys(result).includes('erro')) {
        setHasError(true)
        return
      }
      setAddress(result as PostalAddress)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-cover h-screen w-full" style={backgroundStyles}>
      <Header />
      <div className='mt-28'>
        <h1 className="text-white text-center font-bold text-5xl mb-12">Busca de CEP</h1>
        <TextInput
          submit={searchPostalCode}
          placeholder="Informe o CEP"
          validation={true}
        />
      </div>
      {hasError && (
        <div className="text-black bg-white rounded-md p-6 text-center font-bold text-3xl mt-12">
          CEP não encontrado
        </div>
      )}
      {
        address.cep != '' && (
          <CepResultContainer {...address} />
        )
      }
    </div>
  )
}

export default PostalCode
