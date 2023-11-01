import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Header from './components/Header';
import Description from './components/Description';
import Register from './components/Register';


function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Header />
        <Content />
        <Routes>
          <Route path="/rheo/" element={<Description url="desc" />}></Route>
          <Route path="/rheo/participant" element={<Description url="part" />}></Route>
          <Route path="/rheo/program" element={<Description url="program" />}></Route>
          <Route path="/rheo/abstract" element={<Description url="abstract" />}></Route>
          <Route path="/rheo/document" element={<Description url="doc" />}></Route>
          <Route path="/rheo/participants" element={<Description url="participants" />}></Route>
        </Routes>
        <Footer />
      </Router>
      {/* <Router basename="/register">
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router> */}
    </>
  );
}

export default App;
