import React from 'react'
import './Input.scss'

interface InputProps {
  required: boolean
  placeholder: string
  label: string
  type: string
}

const Input = ({ label, placeholder, required, type }: InputProps) => {
  return (
    <div className='form__control'>
      <input type={type} required={required} placeholder={placeholder} className='form__control__input' />
      <label htmlFor='' className='form__control__label'>
        {label}
      </label>
    </div>
  )
}

export default Input
