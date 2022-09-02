import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header buttonText="Click Me" />
      <Sidebar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer userName="Mark" />
    </div>
  );
}

export default App;
