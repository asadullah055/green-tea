import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/common/Footer";
import Navigation from "./component/common/Navigation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/service" element={<Service></Service>} />
          <Route path="/project" element={<Project></Project>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
