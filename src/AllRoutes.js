import './App.css'
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Pages/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import PopularPage from "./Pages/PopularPage/PopularPage";
import TopRatedPage from './Pages/TopRatedPage/TopRatedPage';
import UpcomingPage from './Pages/UpcomingPage/UpcomingPage';

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
