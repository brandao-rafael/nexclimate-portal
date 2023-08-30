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

  return (
    <div className="bg-black/25 p-5">
      <form className="flex flex-col items-center" onSubmit={submit}>
        <label className="font-bold text-white" htmlFor="userName">
          Nome:
        </label>
        <input
          className="border-2 border-gray-300 rounded-lg p-1 m-2 text-black bg-white"
          type="text"
          id="userName"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label className="font-bold text-white" htmlFor="userEmail">
          Email:
        </label>
        <input
          className="border-2 border-gray-300 rounded-lg p-1 m-2 text-black bg-white"
          type="text"
          id="userEmail"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label className="font-bold text-white" htmlFor="userMessage">
          Mensagem:
        </label>
        <textarea
          className="border-2 border-gray-300 rounded-lg p-1 m-2 text-black bg-white"
          id="userMessage"
          name="message"
          value={userData.message}
          onChange={handleChange}
        />
        <label className="font-bold text-white" htmlFor="file">
          Envie seu currículo: (apenas PDF)
        </label>
        <input
          className="p-1 bg-white rounded-sm font-bold m-4 border-2 border-gray-300"
          type="file"
          accept=".pdf"
          name="file"
          id="file"
          onChange={handleFileChange}
        />
        <input
          type="submit"
          value="Enviar"
          className="p-2 w-1/4 bg-white rounded-md font-bold "
        />
      </form>
    </div>
  )
}

export default ContactForm
