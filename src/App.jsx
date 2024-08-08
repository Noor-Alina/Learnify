import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <section className="browser-container">
        <div className="routes-wrapper">
            <div className="routes-container">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </div>
        </div>
    </section>
</BrowserRouter>
  )
}

export default App
