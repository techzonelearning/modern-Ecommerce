import React from "react";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
