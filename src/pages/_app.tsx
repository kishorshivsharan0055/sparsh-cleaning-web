import { AppProps } from 'next/app';
// import "react-animated-slider/build/horizontal.css";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return(
  // eslint-disable-next-line react/jsx-props-no-spreading  
  <Component {...pageProps} />
)
};

export default MyApp;
