import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OrderForm from "./OrderForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order-form" element={<OrderForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
