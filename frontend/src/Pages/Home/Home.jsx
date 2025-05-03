import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      {showLogin && (
        <Login show={showLogin} onClose={() => setShowLogin(false)} />
      )}
      {/* <Navbar/>
    <Login/> */}
      <Header />
      <ProductContainer />
      <Footer />
    </>
  );
};

export default Home;
