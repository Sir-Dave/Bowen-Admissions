import Dashboard from './screens/applicant/Dashboard';
import SignIn from './screens/auth/SignIn';
import ForgotPassword from './screens/auth/ForgotPassword';
import ReferralLogin from './screens/auth/ReferralLogin';
import Settings from './screens/applicant/Settings';
import Profile from './screens/applicant/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StaffLogin from './screens/auth/StaffLogin';
import EmailConfirm from './screens/auth/EmailConfirm';
import AcceptanceFee from './screens/applicant/AcceptanceFee';
import IdCard from './screens/applicant/IdCard';
import Application from './screens/applicant/Application';
import RegisterAccount from './screens/auth/RegisterAccount';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import './App.css';
import StaffDashboard from './screens/staff/StaffDashboard';
import { UserProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <UserProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/referral-login" element={<ReferralLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/confirm-email" element={<EmailConfirm />} />
          <Route path="/register-account" element={<RegisterAccount />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/applicant/form/application" element={
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          } />
          <Route path="/applicant/form/acceptanceFee" element={
            <ProtectedRoute>
              <AcceptanceFee />
            </ProtectedRoute>
          } />
          <Route path="/applicant/form/idCard" element={
            <ProtectedRoute>
              <IdCard />
            </ProtectedRoute>
          } />
          <Route path="/admin/management-console/dashboard" element={<StaffDashboard />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>


  );
}

export default App;