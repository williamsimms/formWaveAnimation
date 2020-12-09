import React from 'react'
import Input from './components/Input/Input'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <h1>Please Login</h1>
      <form>
        <Input label='Email' placeholder='Email' required type='text' />
        <Input label='Password' placeholder='Password' required type='password' />
        <button className='btn'>Login</button>

        <p className='text'>
          Don't have an account? <a href='/'>Register</a>
        </p>
      </form>
    </div>
  )
}

export default App
