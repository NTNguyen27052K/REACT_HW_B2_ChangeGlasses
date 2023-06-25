import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./Components/sass/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>
);
