import { 
  BrowserRouter, 
  Route, 
  Routes, 
} from "react-router-dom";

import { UserStorage } from "./contexts/userContext";
import Home from "./pages/home";
import History from "./pages/history";
import Library from "./pages/library";
import Login from "./pages/login";

function App() {

  return (
    <UserStorage>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/library" element={<Library />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
