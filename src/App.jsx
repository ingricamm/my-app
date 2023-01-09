import "./App.css";
import Navbar  from "./Components/Navbar";
import Homepage from "./Page/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Page/About";
import React from "react";
import Repository from "./Page/Repository";
import Blogs from "./Page/Blogs";
import ContactPage from "./Page/ContactPage";

function App() {

  
  return (
    <div className="App">
      <Router>
        <body className="App-grid-container">
          <header className="App-header">
            <Navbar open={open}  />
          </header>
          <main className="App-main" >
            <div className="App-main-content">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Repository" element={<Repository />} />
                <Route path="/blog" element={<Blogs/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
              </Routes>
            </div>
            {/* aqui estaba el footer */}
          </main>
          <footer className="App-footer">
          <div className="App-footer-content">terminos y condiciones</div>
          </footer>
        </body>
      </Router>
    </div>
  );
}

export default App;
