import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./contexts/userContext";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Search from "./pages/search/search";
import YourVideos from "./pages/your-videos/yourVideos";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/your-videos" element={<YourVideos />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
