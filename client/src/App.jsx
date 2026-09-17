import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './pages/Dashboard'

import DocumentChat from './pages/DocumentChat'
import Settings from './pages/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0) 

  return (
    <>
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard />} />
  <Route path='/document-chat' element={<DocumentChat />} />
  <Route path='/settings' element={<Settings />} />


</Routes>
</BrowserRouter>
</>

    </>
  )
}

export default App
