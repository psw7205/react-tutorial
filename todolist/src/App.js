import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Head from "./components/Head";
import List from "./components/List";
import CreateForm from "./components/CreateForm";
import { TodoProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
body{
  background: #eeeeee
}`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#00adb5",
          lightgray: "#eeeeee",
          darkgray: "#393e46",
          gray: "#c9d6df",
          black: "#222831",
          red: "#d63447"
        }
      }}
    >
      <TodoProvider>
        <GlobalStyle />
        <Layout>
          <Head />
          <List />
          <CreateForm />
        </Layout>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
