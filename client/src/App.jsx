import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Schemes from "./pages/Schemes";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/expense" element={<Expense />} />

        <Route path="/schemes" element={<Schemes />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;