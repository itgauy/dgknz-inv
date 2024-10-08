import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// layout
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'

//styles
import './App.css'

function AppContent() {
  const location = useLocation();
  const shouldShowLayout = location.pathname !== '/';

  return (
    <div className="flex">
      {shouldShowLayout && <Sidebar />}
      <div className="flex-grow">
        {shouldShowLayout && <Navbar />}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
