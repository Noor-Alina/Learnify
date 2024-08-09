import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Playground from "./pages/Playground/Playground";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import About from "./pages/About/About";
<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
      <section className="browser-container">
        <div className="routes-wrapper">
          <div className="routes-container">
            <Routes>
              <Route path="/" element={<Playground />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
=======
import Header from "../src/components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <section className="browser-container">
                <div className="routes-wrapper">
                    <Header />
                    <div className="routes-container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/playground"
                                element={<Playground />}
                            />
                            <Route
                                path="/employees"
                                element={<EmployeesPage />}
                            />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
>>>>>>> develop
}

export default App;
