import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />

          <div className="App-header-content">
            <div className="Autor">
              <h2>Carolina Mosquera Moreno</h2>
              Process Engineer/ Data Analytics
            </div>
          </div>
          <div className="Photo-profile"></div>
        </header>
        <main className="App-main">
          <div className="App-main-content">
            <Homepage />
            <Routes>
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
          {/* aqui estaba el footer */}
        </main>
      </Router>
    </div>
  );
}

export default App;
