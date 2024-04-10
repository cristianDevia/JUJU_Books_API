/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { registerUser, loginUser, verifyToken } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider ");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const userToken = localStorage.getItem("user data");
    if (userToken && userToken !== null) {
      return true;
    }
    return false;
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const signUp = async (user) => {
    try {
      const res = await registerUser(user);
      const newUser = {
        email: user.email,
        password: user.password,
        token: res.data.token ? res.data.token : null,
      };
      if (newUser.token !== null) {
        setUser(newUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(null);
        setErrorMessage(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginUser(user);

      if (res.message) {
        setUser(null);
        setIsAuthenticated(null);
        setErrorMessage(res.message);
      } else {
        const newUser = {
          email: user.email,
          password: user.password,
          token: res.data.token ? res.data.token : null,
        };
        if (newUser.token !== null) {
          setUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem("user data", newUser.token);
        } else {
          setUser(null);
          setIsAuthenticated(null);
          setErrorMessage(res.data?.message);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (errorMessage !== null) {
      const timeOut = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timeOut);
    }
  }, [errorMessage]);

  useEffect(() => {
    const checkLogin = async () => {
      const userToken = localStorage.getItem("user data");

      if (!userToken) {
        setIsAuthenticated(false);
        return setUser(null);
      }
      try {
        const res = await verifyToken(userToken);
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        console.error(error);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
