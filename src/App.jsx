import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playground from "./pages/Playground/Playground";

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
                </Routes>
            </div>
        </div>
    </section>
</BrowserRouter>
  )
}

export default App;
