import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function MultiStepForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    inflow: "",
    outflow: "",
    Productsales: "",
    Serviceincome: "",
    Rent: "",
    Depreciation: "",
    Marketing: "",
    Salaries: "",
    Costflow: "",
    Revenue: "",
    Expenses: "",
  });

  const handleNext = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleSubmitAll = async () => {
    try {
      console.log("Sanitized Data:", formData);
      const response = await fetch("http://localhost:5000/api/submit-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("All data submitted successfully!");
      }
      {
        const errorText = await response.text(); // Read error response
        console.error("Server response:", errorText);
        alert("Failed to submit all data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting all data.");
    }
  };

  return (
    <div>
      {currentForm === 1 && <Form1 onNext={handleNext} />}
      {currentForm === 2 && <Form2 onNext={handleNext} />}
      {currentForm === 3 && <Form3 onNext={handleNext} />}
      {currentForm === 4 && <Form4 onSubmit={handleSubmitAll} />}
    </div>
  );
}

export default MultiStepForm;
