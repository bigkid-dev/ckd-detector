import React, { useState } from "react";
import Nav from "../landing_page/Nav";

function Doc() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sex: "",
    message:"",

    // Add other form fields here
  });

  const [formDetails, setFormDetails] = useState(true);

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
    //destructuring e.target objects 
    const { name, value } = e.target;
    setFormData((prev)=> ({
        ...prev,
        [name]: value,
    }))
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
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
              </div>
              <div className="input">
                <div>
                  <label>Last Name</label>
                </div>

                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
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
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
          </div>
        </div>
        <div id="msg-data">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input">
                <div>
                  <label>Age</label>
                </div>

                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  name="Age"
                />
              </div>
              <div className="input">
                <div>
                  <label>Sex</label>
                </div>

                <input
                  type="text"
                  value={formData.sex}
                  onChange={handleChange}
                  name="sex"
                />
              </div>
            </div>
            <div>
              <div id="email">
                <div>
                  <label>Message</label>
                </div>

                <input
                  type="email"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                />
              </div>
            </div>
          </form>
          <a href="/">
            <button id="send-msg" type="submit">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Doc;
