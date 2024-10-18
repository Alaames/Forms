import React, { useState } from "react";
import logo from "./assets/logo.trakcit.png";
import ec1 from "./assets/Ellipse 830.png";
import ec2 from "./assets/Ellipse 831.png";
import chart_left from "./assets/Container.png";
import chart_right from "./assets/04.png";
import './Form3.css'

function Form3({ onNext }) {
  const [formData, setFormData] = useState({
    Rent: "",
    Depreciation: "",
    Marketing: "",
    Salaries: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
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
      <h1 className="form-head">Let’s fill your income data</h1>
      <div className="form-container">
        <nav>
          <span>Cost flow</span> ──
          <span>Revenue</span> ──
          <span className="active">Expenses</span> ──
          <span>KPI goal</span>
        </nav>

        <form onSubmit={handleSubmit}>
          <h2>Fill out your Expenses</h2>
          <div className="input-group">
            <label>
              Rent
              <input
                type="number"
                name="Rent"
                value={formData.Rent || ''}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Depreciation
              <input
                type="number"
                name="Depreciation"
                value={formData.Depreciation || ''}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="input-group">
            <label>
              Marketing
              <input
                type="number"
                name="Marketing"
                value={formData.Marketing || ''}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Salaries
              <input
                type="number"
                name="Salaries"
                value={formData.Salaries || ''}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" onClick={onNext}>Next</button>
        </form>
      </div>
    </div>
  );
}

export default Form3;
