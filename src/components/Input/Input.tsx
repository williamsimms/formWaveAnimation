import React, { useRef, useEffect } from 'react'
import './Input.scss'

interface InputProps {
  required: boolean
  placeholder: string
  label: string
  type: string
}

const Input = ({ label, placeholder, required, type }: InputProps) => {
  const labelRef = useRef<any>()

  useEffect(() => {
    labelRef.current.innerHTML = labelRef.current.innerText
      .split('')
      .map((letter: any, index: number) => {
        return `<span style="transition-delay:${index * 50}ms">${letter}</span>`
      })
      .join('')
  }, [])

  console.log(labelRef)

  return (
    <div className='form__control'>
      <input type={type} required={required} className='form__control__input' />
      <label className='form__control__label' ref={labelRef}>
        {label}
      </label>
    </div>
  )
}

export default Input
