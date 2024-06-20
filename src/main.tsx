import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Footer from './component/Footer/Footer.tsx';
import Header from './component/Header/Header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Link to={"/"}  className="my-link">
      <Header />
      </Link>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
)
