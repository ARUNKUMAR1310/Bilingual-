// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Carrer from "./components/Carrer";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Service />
      <Carrer />
      <Contact /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Navbar/>,<Home/>,<About/>,<Service/>,<Carrer/>,<Contact/>]} />
          <Route path="/abo" element={[<Navbar/>,<About/>]} />
          <Route path="/ser" element={[<Navbar/>,<Service/>]} />
          <Route path="/car" element={[<Navbar/>,<Carrer/>]} />
          <Route path="/con" element={[<Navbar/>,<Contact/>]} />
          <Route path="/pro" element={[<Navbar/>,<Products/>]} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
