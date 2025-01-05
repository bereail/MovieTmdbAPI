import React from "react";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/Thumb/NotFound";
import Movie from "./components/Thumb/Movie";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path='/:movieId' element={<Movie/>} />   
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;


/* */