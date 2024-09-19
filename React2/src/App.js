import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsPage from './NewsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;