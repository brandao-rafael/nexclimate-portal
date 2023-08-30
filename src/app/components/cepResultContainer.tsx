import React from 'react'
import { PostalAddress } from '../interfaces/postalInterfaces'

const CepResultContainer: React.FC<PostalAddress> = (data) => {
  return (
    <div className='mt-8 w-full md:w-1/2'>
      <h1 className="text-white text-center font-bold">Resultados:</h1>
      <div className="bg-white rounded-md w-1/2 p-8 ml-auto mr-auto shadow-2xl">
        <ul>
          {Object.entries(data).map((data) => {
            if (data[0].length <= 4) {
              return (
                <li key={data[1]} className="font-semibold">
                  {data[0].toUpperCase()}: {data[1]}
                </li>
              )
            }
            if (!data[1] || data[1].length == 0) return
            // Just to UpperCase the first letter of the key
            const formattedKey =
              data[0].split('')[0].toUpperCase() +
              data[0].split('').slice(1).join('')
            return (
              <li key={data[1]} className="font-semibold">
                {formattedKey}: {data[1]}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CepResultContainer
