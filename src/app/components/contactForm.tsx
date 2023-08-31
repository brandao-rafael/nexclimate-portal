import React from 'react'

const ContactForm: React.FC = () => {
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const [file, setFile] = React.useState<File>()

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      setFile(files[0])
    }
  }

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log({ ...userData, file })
  }

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/
    return (
      userData.name.trim().length < 5 ||
      !emailRegex.test(userData.email) ||
      userData.message.trim().length < 5 ||
      !file
    )
  }

  return (
    <div className="p-1">
      <form className="flex flex-col items-center" onSubmit={submit}>
        <label className="font-light text-white" htmlFor="userName">
          Nome:
        </label>
        <input
          className="border-2 border-gray-300 rounded-lg p-1 m-2 w-4/5 text-black bg-white sm:w-7/12"
          type="text"
          id="userName"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label className="font-light text-white" htmlFor="userEmail">
          Email:
        </label>
        <input
          className="border-2 border-gray-300 rounded-lg p-1 m-2 w-4/5 text-black bg-white sm:w-7/12"
          type="text"
          id="userEmail"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label className="font-light text-white" htmlFor="userMessage">
          Mensagem:
        </label>
        <textarea
          className="border-2 border-gray-300 rounded-lg p-1 m-2 w-4/5 text-black bg-white sm:w-7/12"
          id="userMessage"
          name="message"
          value={userData.message}
          onChange={handleChange}
        />
        <label className="font-light text-white" htmlFor="file">
          Envie seu currículo: (apenas PDF)
        </label>
        <input
          className="p-1 bg-white/50 rounded font-light m-4 border-2 border-gray-300 w-4/5 sm:w-7/12"
          type="file"
          accept=".pdf"
          name="file"
          id="file"
          onChange={handleFileChange}
        />
        <input
          type="submit"
          value="Enviar"
          className="p-2 w-4/5 sm:w-7/12 mb-2 bg-sky-800 text-white rounded-md font-thin hover:font-bold hover:animate-pulse transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={validateForm()}
        />
      </form>
    </div>
  )
}

export default ContactForm
