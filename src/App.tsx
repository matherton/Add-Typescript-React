import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header buttonText="Click Me" />
      <Sidebar />
      <div className="mx-auto mt-8">
        <h1 className="text-4xl text-center">Main Content</h1>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </div>
      {/* <Footer userName="Mark" /> */}
      <Footer footerText="Mark" />
    </div>
  );
}

export default App;
