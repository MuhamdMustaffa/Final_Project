import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import Menu from "./Pages/menu/menu";
import Book from "./Pages/book/book";
import Blog from "./Pages/blog/blog";
import BlogDetails from "./Pages/blogDetails/blogDetails";
import Contact from "./Pages/contact/contact";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
