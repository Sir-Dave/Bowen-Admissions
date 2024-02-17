import Dashboard from './screens/Dashboard';
import SignIn from './screens/SignIn';
import ForgotPassword from './screens/ForgotPassword';
import ReferralLogin from './screens/ReferralLogin';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffLogin from './screens/StaffLogin';
import EmailConfirm from './screens/EmailConfirm';
import Application from './screens/Application';
import RegisterAccount from './screens/RegisterAccount';


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
        <Route path="/register-account" element={<RegisterAccount />} />
        <Route path="/applicant/form/application" element={<Application/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;