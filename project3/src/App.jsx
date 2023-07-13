import Main from './components/Main.jsx'
import ValidationBox from './components/ValidationBox.jsx'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [email,setEmail]=useState("")
  const [status,setStatus]=useState(false)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main email={email} setEmail={setEmail} />}></Route>
      <Route path="/ValidationBox" element={<ValidationBox email={email}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
