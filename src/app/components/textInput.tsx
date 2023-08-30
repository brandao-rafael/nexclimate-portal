import React from 'react'

interface TextInputProps {
  submit: (value: string) => void
  placeholder?: string
  type?: string
  buttonText?: string
  validation?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  submit,
  placeholder = '',
  type = 'text',
  buttonText = 'Search',
  validation = false,
}) => {
  const [value, setValue] = React.useState('')

  return (
    <div className="flex mt-28">
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded-lg p-1 m-2 text-black"
        onChange={({ target: { value } }) => {
          setValue(value)
        }}
      />
      <button
        type="button"
        className="m-2 rounded-lg bg-white text-black pl-1 pr-1"
        onClick={(_) => submit(value)}
        disabled={validation ? value.length !== 8 : false}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default TextInput
