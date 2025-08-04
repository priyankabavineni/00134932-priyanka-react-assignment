import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment1 from './assign1/Assignment1'
import Employee from './employee/Employee'
import Parent from './assign3/parent/Parent'
import RegistrationForm from './registration/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Assignment1></Assignment1><hr/>
      <Employee></Employee><hr/>
      <Parent></Parent><hr/>
      <RegistrationForm></RegistrationForm>
    </div>
  )
    
}

export default App
