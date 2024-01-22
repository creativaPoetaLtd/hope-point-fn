import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>

  </React.StrictMode>,
)
