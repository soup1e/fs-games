import React from "react";
import "@/styles/globals.css";
import Navbar from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Navbar />
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
