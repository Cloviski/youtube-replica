import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import History from "./pages/history";
import Library from "./pages/library";
import { MainContainer } from "./AppStyles";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <MainContainer>
        <Menu />
        <div style={{ width: '100%', display: 'block', boxSizing: 'border-box', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </MainContainer>
    </div>
    </BrowserRouter>
  );
}

export default App;
