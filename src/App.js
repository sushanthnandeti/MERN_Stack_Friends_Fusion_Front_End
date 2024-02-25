import { Home } from '@mui/icons-material';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Homepage from 'scenes/homepage';
import Loginpage from 'scenes/loginpage';
import Profilepage from 'scenes/profilepage';

function app() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <Route path = "/" element={<Loginpage />} />
            <Route path = "/home" element={<Homepage />} />
            <Route path = "/profile/:userId" element={<Profilepage />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default app;
