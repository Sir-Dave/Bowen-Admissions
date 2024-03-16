import Dashboard from './screens/applicant/Dashboard';
import SignIn from './screens/auth/SignIn';
import ForgotPassword from './screens/auth/ForgotPassword';
import ReferralLogin from './screens/auth/ReferralLogin';
import Settings from './screens/applicant/Settings';
import Profile from './screens/applicant/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffLogin from './screens/auth/StaffLogin';
import EmailConfirm from './screens/auth/EmailConfirm';
import Application from './screens/applicant/Application';
import RegisterAccount from './screens/auth/RegisterAccount';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import './App.css';
import StaffDashboard from './screens/staff/StaffDashboard';
import { UserProvider } from './context/AuthContext';

function App() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <UserProvider>
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
          <Route path="/applicant/form/application" element={<Application />} />
          <Route path="/admin/management-console/dashboard" element={<StaffDashboard />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>


  );
}

export default App;