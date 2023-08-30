import React from 'react'

interface TextInputProps {
  submit: (value: string) => void
  placeholder?: string
  type?: string
  buttonText?: string
  validation?: boolean
  validationLength?: number
}

const TextInput: React.FC<TextInputProps> = ({
  submit,
  placeholder = '',
  type = 'text',
  buttonText = 'Search',
  validation = false,
  validationLength = 8,
}) => {
  const [value, setValue] = React.useState('')

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submit(value)
    }
  }

  return (
    <div className="flex">
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded p-1 m-2 text-black"
        onKeyDown={handleKeyPress}
        onChange={({ target: { value } }) => {
          setValue(value)
        }}
      />
      <button
        type="button"
        className="m-2 rounded bg-sky-800 text-white font-bold px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        // eslint-disable-next-line no-unused-vars
        onClick={() => submit(value)}
        disabled={validation ? value.length !== validationLength : false}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default TextInput
