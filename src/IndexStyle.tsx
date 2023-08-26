import { createGlobalStyle } from "styled-components";

export const IndexStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap');

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
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: #8c8c8c;
  border-radius: 20px;
}
`;
