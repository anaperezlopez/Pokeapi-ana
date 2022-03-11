import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Detail from './components/detail/Detail';
import Header from './components/header/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Página no encontrada</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
