import ContactForm from '@/app/components/contactForm'
import '../app/globals.css'
import Header from '@/app/components/header'
import React from 'react'

const Contact: React.FC = () => {
  const backgroundStyles = {
    backgroundImage: 'url(images/contactBg.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: '1',
    padding: '0',
  }

  return (
    <div
      className="flex flex-col bg-cover h-screen w-full"
      style={backgroundStyles}
    >
      <Header />
      <div className="bg-black/50 h-full">
        <div className='w-4/6 ml-auto mr-auto mt-36 sm:mt-28 bg-black/25 rounded-md p-5'>
          <h1 className="text-white text-center font-thin text-5xl mb-8">
            Contato
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
