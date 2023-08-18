import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./contexts/userContext";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Search from "./pages/search";
import YourVideos from "./pages/your-videos";

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
