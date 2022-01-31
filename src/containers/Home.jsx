import React, { useState, useRef, useEffect } from "react";
import CustomCursor from "../CustomCursor";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  useLocoScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Madeleine Enberg</h1>
          <h2>Film photographer and developer</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
