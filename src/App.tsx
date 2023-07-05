import { 
  BrowserRouter, 
  Route, 
  Routes, 
} from "react-router-dom";

import { UserStorage } from "./contexts/userContext";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {

  return (
    <UserStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
