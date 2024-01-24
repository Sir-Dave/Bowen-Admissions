import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ReferralLogin from './components/ReferralLogin';
import Settings from './components/Settings';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffLogin from './components/StaffLogin';
import EmailConfirm from './components/EmailConfirm';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/referral-login" element={<ReferralLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/confirm-email" element={<EmailConfirm />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;