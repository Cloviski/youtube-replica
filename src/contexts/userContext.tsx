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
  const [userVideos, setUserVideos] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") as string);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const navigate = useNavigate();

  const createVideos = (
    token: string,
    user_id: string,
    title: string,
    description: string,
    thumbnail: string,
    publishedAt: Date
  ) => {
    api
      .post(
        "/videos/create-video",
        { user_id, title, description, thumbnail, publishedAt },
        { headers: { Authorization: token } }
      )
      .then(() => {
        alert("Video created!");
        getUser(token);
      })
      .catch((error) => {
        console.log("It wasn't possible to send the video", error);
        alert("Video wasn't sended. Try again.");
      });
  }; 
  
  const getVideos = (token: string, user_id: string) => {
    api
      .get(`/videos/get-videos?user_id=${user_id}`, {
        headers: { Authorization: token },
      })
      .then(({ data }) => {
        setUserVideos(data.videos);
      })
      .catch((error) => {
        console.log("Error finding videos", error);
      });
    };
    

  const getUser = (token: string) => {
    api
      .get("/user/get-user", { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);
        setLogin(true);
        getVideos(token, data.user.id);
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
        token,
        userVideos,
        dropDownMenu,
        setDropDownMenu,
        getVideos,
        handleLogin,
        handleCreateUser,
        logOut,
        createVideos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
