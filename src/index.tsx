import React from "react";
import ReactDOM from "react-dom/client";
import { IndexStyle } from "./IndexStyle";
import { MenuProvider } from "./contexts/menuContext";
import { CategoryProvider } from "./contexts/categoryContext";
import { SearchProvider } from "./contexts/searchContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexStyle />
    <MenuProvider>
      <SearchProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </SearchProvider>
    </MenuProvider>
  </React.StrictMode>
);
