import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Footer from './component/Footer/Footer.tsx';
import Header from './component/Header/Header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
)
