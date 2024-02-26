import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    api_key: process.env.REACT_APP_API_KEY,
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
