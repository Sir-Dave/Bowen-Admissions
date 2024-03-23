import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getApplicantProfile, login, register, getCurrentApplicationForm } from '../api/ApiRequest';
import { toast } from 'react-toastify';
import { UserProfile } from '../dtos/user/UserDto';
import { ApplicationForm } from '../dtos/applicant/ApplicationFormResponse';
import { api } from '../api/ApiRequest';

interface UserContextType {
  token: string | null;
  user: UserProfile | null;
  applicationDetail: ApplicationForm | null;
  registerUser: (firstName: string, surname: string, email: string, phoneNo: string,
    countryCode: string, password: string, code: number) => void
  loginUser: (email: string, password: string) => void
  getUserProfile: () => void;
  getUserCurrentApplication: () => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  hasApplication: () => boolean;
}

interface Props { children: React.ReactNode }

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [applicationDetail, setApplicationDetail] = useState<ApplicationForm | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const applicationDetail = localStorage.getItem("applicationDetail");
    if (token) {
      setToken(token);
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    if (user) {
      setUser(JSON.parse(user));
    }

    if (applicationDetail){
      setApplicationDetail(JSON.parse(applicationDetail));
    }
    setIsReady(true);
  }, []);


  const registerUser = async (firstName: string, surname: string, email: string,
    phoneNo: string, countryCode: string, password: string, code: number) => {

    await register(firstName, surname, email, phoneNo, countryCode, password, code
    ).then((res) => {
      if (res) {
        toast.success(res?.data.message);
        navigate("/sign-in");
      }
      else toast.error("An error occurred during registration")
    })
      .catch((e) => toast.error("An error occurred during registration"));
  };

  const loginUser = async (email: string, password: string) => {
    await login(email, password).then((res) => {
      if (res) {
        localStorage.setItem("token", res?.data.token);
        setToken(res?.data.token!);
        toast.success("Login Success!");
        navigate("/");
      }
      else toast.error("An error occurred during sign in");
    })
      .catch((e) => toast.error("An error occurred during sign in"));
  };

  const getUserProfile = async () => {
    await getApplicantProfile().then((res) => {
      if (res) {
        const userObj = res?.data.data
        localStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj!);
      }
      //else toast.error("An error occurred while retrieving your profile");
    })
      .catch((e) => toast.error("An error occurred while retrieving your profile"));
  };

  const getUserCurrentApplication = async () => {
    await getCurrentApplicationForm().then((res) => {
      if (res) {
        const applicationDetail = res?.data.data
        localStorage.setItem("applicationDetail", JSON.stringify(applicationDetail));
        setApplicationDetail(applicationDetail!);
      }
      //else toast.error("An error occurred while retrieving your profile");
    })
      .catch((e) => toast.error("An error occurred while retrieving application details"));
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const hasApplication = () => {
    return !!applicationDetail;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("applicationDetail");
    setToken("");
    setUser(null);
    setApplicationDetail(null)
    navigate("/sign-in");
  };

  return (
    <UserContext.Provider value={{ user, applicationDetail, token, registerUser, loginUser, getUserProfile, getUserCurrentApplication, logout, isLoggedIn, hasApplication }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );

}

export const AuthContext = () => React.useContext(UserContext);
