import React, { useState } from "react";
import Nav from "../landing_page/Nav";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
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
  const [resultForm, setResultForm] = useState({
    name: "",
    email: "",
  });

  const [formDetails, setFormDetails] = useState(true);
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch("http://127.0.0.1:8000/api/result", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(resultForm),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

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
    console.log(resultForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResultChange = (e) => {
    const { name, value } = e.target;
    setResultForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const predict = async () => {
    // setIsLoading(true);
    await fetch("http://127.0.0.1:8000/api/test")
      .then((resp) => resp.json())
      .then((data) => {
        setOutput(data);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          if (data[i].name === formData.name) {
            console.log("true");
            console.log(data[i].output);
            console.log("hello");
            setOutput(data[i].output);
          } else {
          }
        }
      });
  };

  const newPredict = async () => {
    // setIsLoading(true);
    await fetch("http://127.0.0.1:8000/api/test")
      .then((resp) => resp.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          console.log(item.name);
          if (item.name === formData.name) {
            console.log("it is");
            console.log("true");
            console.log(item.output);
            console.log("hello" + output);
            setOutput(item.output);
          } else {
          }
        }
      });
  };

  return (
    <div>
      <Nav />
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

                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />
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

              <input
                type="email"
                onChange={handleResultChange}
                name="email"
                value={resultForm.email}
              />
            </div>
          </div>
        </div>
        <div id="ckd-data">
          <form onSubmit={handleSubmit}>
            {formDetails ? (
              <div className="first-form">
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
                      <label>Blood Urea:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="blood_urea"
                        value={formData.blood_urea}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <div>
                      <label>Serum Creatine:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="serum_creatine"
                        value={formData.serum_creatine}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input">
                    <div>
                      <label>sodium:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="sodium"
                        value={formData.sodium}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <div>
                      <label>hemoglobin:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="hemoglobin"
                        value={formData.hemoglobin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input">
                    <div>
                      <label>white_blood_cell_count:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="white_blood_cell_count"
                        value={formData.white_blood_cell_count}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <div>
                      {" "}
                      <label>red_blood_cell_count:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="red_blood_cell_count"
                        value={formData.red_blood_cell_count}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input">
                    <div>
                      <div>
                        <label>Glucose:</label>
                      </div>
                      <div>
                        <input
                          type="number"
                          step="0.01"
                          name="blood_glucose"
                          value={formData.blood_glucose}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input">
                    <div>
                      <label>albumin:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        step="0.01"
                        name="albumin"
                        value={formData.albumin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input">
                    <div>
                      <label>appetite:</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="appetite"
                        value={formData.appetite}
                        onChange={handleChange}
                        placeholder="good/poor"
                      />
                    </div>
                  </div>

                  <div className="input">
                    <div>
                      <label>red_blood_cell:</label>
                    </div>
                    <div>
                      <input
                        name="red_blood_cell"
                        value={formData.red_blood_cell}
                        onChange={handleChange}
                        placeholder="Normal/Abnormal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="form-row">
                  <div className="input">
                    <div>
                      <label>pus_cell ():</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="pus_cell"
                        value={formData.pus_cell}
                        onChange={handleChange}
                        placeholder="normal/abnormal"
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
                        placeholder="present/absent"
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
                        placeholder="present/absent"
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
                        placeholder="Yes/No"
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
                        placeholder="Yes/No"
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
                        placeholder="Yes/No"
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
                        placeholder="Yes/No"
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
                        placeholder="Yes/No"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input">
                    <div>
                      <label>Sugar:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="sugar"
                        value={formData.sugar}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input"></div>
                </div>
                <div>
                  <button onClick={newPredict}>Predict</button>

                  <p>{output}</p>
                </div>
              </div>
            )}

            {/* Add other form fields here */}
            {formDetails ? (
              <button
                id="next"
                onClick={() => {
                  setFormDetails(!formDetails);
                }}
              >
                Next
              </button>
            ) : (
              <button
                id="next"
                onClick={() => {
                  setFormDetails(!formDetails);
                }}
                type="submit"
              >
                Submit
              </button>
            )}
            {!formDetails ? (
              <button
                id="prev-btn"
                onClick={() => {
                  setFormDetails(!formDetails);
                }}
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
