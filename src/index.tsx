import React from "react";
import ReactDOM from "react-dom/client";
import { MenuProvider } from "./contexts/menuContext";
import { CategoryProvider } from "./contexts/categoryContext";
import { SearchProvider } from "./contexts/searchContext";
import { ModalProvider } from "./contexts/modalContext";
import { IndexStyle } from "./styles/IndexStyles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexStyle />
    <ModalProvider>
      <MenuProvider>
        <SearchProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </SearchProvider>
      </MenuProvider>
    </ModalProvider>
  </React.StrictMode>
);
