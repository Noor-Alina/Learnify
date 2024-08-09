import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playground from "./pages/Playground/Playground";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import About from "./pages/About/About";
import Header from "../src/components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className="browser-container">
        <div className="routes-wrapper">
          <div className="routes-container">
            <Routes>
              <Route path="/playground" element={<Playground />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
