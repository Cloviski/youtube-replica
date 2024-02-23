import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { MenuProvider } from "./contexts/menuContext";
import { CategoryProvider } from "./contexts/categoryContext";
import { SearchProvider } from "./contexts/searchContext";
import { ModalProvider } from "./contexts/modalContext";
import App from "./App";

const IndexStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    scrollbar-width: 10px;
    scrollbar-color: #8c8c8c;

    *::-webkit-scrollbar {
      width: 8px;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #8c8c8c;
      border-radius: 20px;
    }
  }
`;

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
