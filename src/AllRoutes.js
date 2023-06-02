import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function AllRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<NavBar />} >
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
