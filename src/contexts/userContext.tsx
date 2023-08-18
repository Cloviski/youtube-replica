import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

interface UserStoreProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: UserStoreProps) => {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") as string);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const navigate = useNavigate();

  const getUser = (token: string) => {
    api
      .get("/user/get-user", { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);
        setLogin(true);
      })
      .catch((error) => {
        console.log("User isn't authenticated", error);
      });
  };

  useEffect(() => {
    getUser(token);
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUser({});
  };

  const handleLogin = (email: string, password: string) => {
    api
      .post("/user/sign-in", { email, password })
      .then(({ data }) => {
        setLogin(true);
        localStorage.setItem("token", data.token);
        setToken(data.token);
        getUser(data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log("It wasn't possible to login", error);
      });
  };

  const handleCreateUser = (name: string, email: string, password: string) => {
    api
      .post("/user/sign-up", { name, email, password })
      .then(() => {
        alert("User was created!");
        handleLogin(email, password);
        navigate("/");
      })
      .catch((error) => {
        console.log("It wasn't possible to create a user", error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        dropDownMenu,
        setDropDownMenu,
        handleLogin,
        handleCreateUser,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
