// src/App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Homepage';
import QR from './pages/QR';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/checkin'} replace />} />
        <Route path='checkin' element={<Home />} />
        <Route path='qr' element={<QR />} />
      </Routes>
    </Router>
  );
};

export default App;
