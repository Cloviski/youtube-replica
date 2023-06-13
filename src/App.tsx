import { BrowserRouter, 
  Route, 
  Routes, 
  useLocation 
} from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import History from "./pages/history";
import Library from "./pages/library";
import { MainContainer } from "./AppStyles";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login";

function App() {
  const location = useLocation();
  const isLoginPage: boolean = location.pathname === "/login";
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          {!isLoginPage ? null : <Header />}
          <MainContainer>
            {!isLoginPage ? null : <Menu />}
            <div style={{ 
              width: '100%', 
              display: 'block', 
              boxSizing: 'border-box', 
              justifyContent: 'center' 
            }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/library" element={<Library />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </MainContainer>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
