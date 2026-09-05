import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

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

        {/* Pages without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages with Navbar */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/expense"
          element={
            <Layout>
              <Expense />
            </Layout>
          }
        />

        <Route
          path="/schemes"
          element={
            <Layout>
              <Schemes />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;