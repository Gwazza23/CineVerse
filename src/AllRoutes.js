import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";

function AllRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<NavBar />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
