import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Blogpost from "./pages/Blogpost";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Home } from "./pages";

export default function App() {
  return (
    <React.Fragment>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}
