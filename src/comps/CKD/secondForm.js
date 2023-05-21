import React, { useState } from "react";

function SecondForm() {
  const [formData, setFormData] = useState({
    age: "",
    blood_pressure: "",
    blood_urea: "",
    serum_creatine: "",
    sodium: "",
    hemoglobin: "",
    white_blood_cell_count: "",
    red_blood_cell_count: "",
    blood_glucose: "",
    albumin: "",
    sugar: "",
    appetite: "",
    red_blood_cell: "",
    pus_cell: "",
    pus_cell_clumps: "",
    bacteria: "",
    hypertension: "",
    diabetes: "",
    c_a_d: "",
    pelma_edema: "",
    anamia: "",
    // Add other form fields here
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-area">
      <div id="user-info">
        <h1>Early Detection Save Lives</h1>
        <h5>Know Your Kidney Health Status</h5>
        <div>
          <div className="form-row">
            <div className="input">
              <div>
                <label>First Name</label>
              </div>

              <input type="text" />
            </div>
            <div className="input">
              <div>
                <label>Last Name</label>
              </div>

              <input type="text" />
            </div>
          </div>
        </div>
        <div>
          <div id="email">
            <div>
              <label>Email</label>
            </div>

            <input type="text" />
          </div>
        </div>
      </div>
      <div id="ckd-data">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <div className="form-row">
                <div className="input">
                  <div>
                    <label>Age:</label>
                  </div>

                  <input
                    type="number"
                    step="0.01"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <div>
                    <label>Blood Pressure:</label>
                  </div>

                  <input
                    type="number"
                    step="0.001"
                    name="blood_pressure"
                    value={formData.blood_pressure}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input">
                <div>
                  <label>pus_cell:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="pus_cell"
                    value={formData.pus_cell}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <label>pus_cell_clumps:</label>
                </div>
                <div>
                  <input
                    name="pus_cell_clumps"
                    value={formData.pus_cell_clumps}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input">
                <div>
                  <label>bacteria</label>
                </div>
                <div>
                  <input
                    name="bacteria"
                    value={formData.bacteria}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <label>hypertension:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="hypertension"
                    value={formData.hypertension}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input">
                <div>
                  <label>diabetes:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="diabetes"
                    value={formData.diabetes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <label>c_a_d:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="c_a_d"
                    value={formData.c_a_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input">
                <div>
                  <label>pelma_edema:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="pelma_edema"
                    value={formData.pelma_edema}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <label>anamia:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="anamia"
                    value={formData.anamia}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Add other form fields here */}
          <button id="next" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondForm;
