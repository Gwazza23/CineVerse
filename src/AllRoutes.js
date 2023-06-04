import './App.css'
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import PopularPage from "./Components/PopularPage/PopularPage";
import TopRatedPage from './Components/TopRatedPage/TopRatedPage';
import UpcomingPage from './Components/UpcomingPage/UpcomingPage';

function AllRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<NavBar />} >
          <Route index element={<HomePage />}/>
          <Route path="popular" element={<PopularPage />} />
          <Route path='top-rated' element={<TopRatedPage />}/>
          <Route path='upcoming' element={<UpcomingPage />}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
