import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//components
// import Navbar from './components/Navbar'
// import SideBar from './components/Sidebar'

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

//styles
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <Navbar />
          <SideBar /> */}
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/home"
                element={<Dashboard />}
              />
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
