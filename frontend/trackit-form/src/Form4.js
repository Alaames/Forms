import React, { useState } from "react";
import logo from "./assets/logo.trakcit.png";
import ec1 from "./assets/Ellipse 830.png";
import ec2 from "./assets/Ellipse 831.png";
import chart_left from "./assets/Container.png";
import chart_right from "./assets/04.png";
import "./Form4.css";

function Form4({ onSubmit }) {
  const [formData, setFormData] = useState({
    Costflow: "",
    Revenue: "",
    Expenses: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      const response = await fetch("http://localhost:5000/api/submit-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully!");
        setFormData({ inflow: "", outflow: "" });
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="asset1">
        <img src={ec1} alt={ec1}></img>
      </div>
      <div className="asset2">
        <img src={ec2} alt={ec2}></img>
      </div>
      <div className="asset3">
        <img src={chart_left} alt={chart_left}></img>
      </div>
      <div className="asset4">
        <img src={chart_right} alt={chart_right}></img>
      </div>
      <h1 className="form-head">Let’s fill your KPI target values</h1>
      <div className="form-container">
        <nav>
          <span>Cost flow</span> ──
          <span>Expenses</span> ──
          <span>Revenue</span> ──
          <span className="active">KPI goal</span>
        </nav>

        <form onSubmit={handleSubmit}>
          <h2>Fill out your Revenue</h2>
          <label>
            Cost flow
            <input
              type="number"
              name="Costflow"
              value={formData.Costflow || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Revenue
            <input
              type="number"
              name="Revenue"
              value={formData.Revenue || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Expenses
            <input
              type="number"
              name="Expenses"
              value={formData.Expenses || ""}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form4;
