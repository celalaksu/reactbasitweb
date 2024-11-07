import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DataListComponent from "./DataListComponent";
import DataDetailsListComponent from "./DataDetailsComponent";
import NotFound from "./NotFound";

const Content = () => {
  // kodlar
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkinda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/datalistcomponent" element={<DataListComponent />} />
          <Route path="/details/:id" element={<DataDetailsListComponent />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
