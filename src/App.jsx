import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playground from "./pages/Playground/Playground";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";

function App() {

  return (
    <BrowserRouter>
    <section className="browser-container">
        <div className="routes-wrapper">
            <div className="routes-container">
                <Routes>
                    <Route
                        path="/"
                        element={<Playground/>}
                    />
                    <Route
                        path="/employees"
                         element={<EmployeesPage />} 
                    />

                </Routes>
            </div>
        </div>
    </section>
</BrowserRouter>
  )
}

export default App;
