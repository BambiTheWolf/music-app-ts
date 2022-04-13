import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailPage from "./components/DetailPage";
import Home from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
