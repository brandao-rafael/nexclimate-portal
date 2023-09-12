import React from 'react'
import { PostalAddress } from '../interfaces/postalInterfaces'

const CepResultContainer: React.FC<PostalAddress> = (data) => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-white text-center font-thin">Resultados:</h2>
      <div className="bg-white rounded-md w-11/12 px-8 py-3 ml-auto mr-auto shadow-2xl shadow-white/25">
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
