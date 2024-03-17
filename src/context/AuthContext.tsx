import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getApplicantProfile, login, register } from '../api/ApiRequest';
import { toast } from 'react-toastify';
import axios from 'axios';
import { UserProfile } from '../dtos/user/UserDto';

interface UserContextType {
  user: UserProfile | null;
  token: string | null;
  registerUser: (firstName: string, surname: string, email: string, phoneNo: string,
    countryCode: string, password: string, code: number) => void
  loginUser: (email: string, password: string) => void
  getUserProfile: () => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

interface Props { children: React.ReactNode }

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    if (user) {
      setUser(JSON.parse(user));
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
        const userObj = res?.data
        localStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj!);
      }
      else toast.error("An error occurred while retrieving your profile");
    })
      .catch((e) => toast.error("An error occurred while retrieving your profile"));
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/sign-in");
  };

  return (
    <UserContext.Provider value={{ user, token, registerUser, loginUser, getUserProfile, logout, isLoggedIn }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );

}

export const AuthContext = () => React.useContext(UserContext);
