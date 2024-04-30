import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
//import { TopBar } from "./TopBar";
import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import { Contact } from "./Contact";

export const All = () => {
  return (
    <>
      <Home />
      <About />
      <Product />
      <Contact />
    </>
  );
};
